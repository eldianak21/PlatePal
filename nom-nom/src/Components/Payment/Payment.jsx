import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Login/UserContext";
import { axiosInstance } from "../Api/Axios";
import { db } from "../../firebase"; // Ensure you import your initialized Firestore
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions

const Payment = () => {
  const { cartItems, removeFromCart } = useCart();
  const user = useAuth();
  const totalItem =
    cartItems.reduce((amount, item) => amount + item.amount, 0) || 0;
  const total =
    cartItems.reduce((amount, item) => amount + item.price * item.amount, 0) ||
    0;

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const errorMessage = e?.error?.message || "";
    setCardError(errorMessage);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded
    }

    setProcessing(true);

    try {
      const response = await axiosInstance.post(
        `/payment/create?total=${total * 100}`
      );
      const clientSecret = response.data?.clientSecret;

      const { error: paymentError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

      if (paymentError) {
        setCardError(paymentError.message);
        setProcessing(false);
        return;
      }

      // Save order details to the database using Firestore
      await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
        basket: cartItems,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        deliveryAddress,
      });

      removeFromCart();
      navigate("/confirmation", {
        state: { msg: "You have placed a new order" },
      });
    } catch (error) {
      console.error("Payment error:", error);
      setCardError("Payment processing failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      {totalItem === 0 ? (
        <h2 className="text-center">Your cart is empty.</h2>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">
            Checkout ({totalItem}) items
          </h1>
          <h3 className="text-lg font-semibold mt-4">Delivery Address</h3>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Enter delivery address"
            className="border p-2 mb-4 w-full"
            required
          />
          <h3 className="text-lg font-semibold">Review items and Delivery</h3>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <h4 className="font-medium">{item.name}</h4>
                <p>
                  {item.price} Birr x {item.amount}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <h3 className="text-lg font-semibold">Payment Methods</h3>
          <form onSubmit={handlePayment}>
            {cardError && <small className="text-red-500">{cardError}</small>}
            <CardElement onChange={handleChange} className="my-4" />
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold">Total Order: {total} Birr</span>
              <button
                type="submit"
                disabled={processing || !stripe || !elements}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
              >
                {processing ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Payment;
