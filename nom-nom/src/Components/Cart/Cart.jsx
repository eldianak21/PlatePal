import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useCart } from '../../Components/Cart/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const isLoggedIn = false; // Replace with actual login check
    if (isLoggedIn) {
      navigate('/payment');
    } else {
      navigate('/create-account'); // Redirect to create account if not logged in
    }
  };

  return (
    <div className="p-5 bg-yellow-50 min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center mb-6">
        <MdShoppingCart className="text-8xl text-red-500 mb-2" />
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4 w-full max-w-2xl">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b py-4 bg-white rounded-lg shadow-md p-4">
                <span className="text-lg font-medium text-gray-700">{item.name}</span>
                <span className="text-lg font-semibold text-gray-900">{item.price} Birr</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 w-full max-w-2xl text-right">
            <h2 className="text-xl font-bold text-gray-800">Total: {totalPrice} Birr</h2>
            <button 
              onClick={handleCheckout} // Call handleCheckout on click
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 mt-4">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-4">
          <p className="text-lg transition-transform duration-300 transform hover:scale-105 hover:text-red-500">
            Your cart is empty.
          </p>
          <p className="text-lg transition-transform duration-300 transform hover:scale-105 hover:text-red-500">
            Add items to your cart to see them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;