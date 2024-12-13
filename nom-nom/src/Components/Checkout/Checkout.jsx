// src/Components/Checkout.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:5000/api/create-payment', {
        amount: 1000, // Example amount in cents (10.00 ETB)
        email: 'customer@example.com', // Replace with actual email
      });

      // Redirect to Chapa payment URL
      window.location.href = response.data.data.authorization_url; // Redirect to Chapa's payment page
    } catch (err) {
      setError(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h1>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handlePayment}
        className={`bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 mt-4 ${loading ? 'opacity-50' : ''}`}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Checkout;