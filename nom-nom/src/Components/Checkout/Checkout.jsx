// // src/Components/Checkout/Checkout.jsx
// import React from 'react';

// const Checkout = () => {
//   return (
//     <div className="p-5 bg-yellow-50 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h1>
//       <p className="text-lg text-gray-700">Thank you for your order!</p>
//       <p className="text-lg text-gray-700">We will process your payment shortly.</p>
//       {/* Add further checkout details and payment options here */}
//     </div>
//   );
// };

// export default Checkout;

import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContext"; // Adjust the path based on your structure

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(CartContext); // Access user info correctly

  useEffect(() => {
    // Check if the user is logged in
    if (!user) {
      navigate("/create-account"); // Redirect to Create Account page if not logged in
    }
  }, [user, navigate]);

  return (
    <div className="p-5 bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h1>
      <p className="text-lg text-gray-700">Thank you for your order!</p>
      <p className="text-lg text-gray-700">
        We will process your payment shortly.
      </p>
      {/* Add further checkout details and payment options here */}
    </div>
  );
};

export default Checkout;
