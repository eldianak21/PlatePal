// import React, { useState } from 'react';

// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handlePayment = () => {
//     // Implement payment logic based on selected method
//     if (paymentMethod === 'telebirr') {
//       console.log("Payment processed with Telebirr");
//     } else if (paymentMethod === 'cbe') {
//       console.log("Payment processed with CBE");
//     } else {
//       console.log("Please select a payment method");
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold mb-4">Payment</h1>
//       <p>Please select your payment method:</p>

//       <div className="mt-4">
//         <label className="block mb-2">
//           <input
//             type="radio"
//             value="telebirr"
//             checked={paymentMethod === 'telebirr'}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />
//           Telebirr
//         </label>
//         <label className="block mb-2">
//           <input
//             type="radio"
//             value="cbe"
//             checked={paymentMethod === 'cbe'}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />
//           CBE (Commercial Bank of Ethiopia)
//         </label>
//       </div>

//       <button
//         onClick={handlePayment}
//         className="bg-red-500 text-white py-2 px-4 rounded mt-4"
//       >
//         Confirm Payment
//       </button>
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    if (!paymentMethod) {
      setError("Please select a payment method");
      return;
    }

    setError(""); // Clear any previous errors
    setLoading(true); // Start loading state

    try {
      // Simulate payment processing (replace with actual payment logic)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay

      // Implement payment logic based on selected method
      if (paymentMethod === "telebirr") {
        console.log("Payment processed with Telebirr");
      } else if (paymentMethod === "cbe") {
        console.log("Payment processed with CBE");
      }

      // Optionally, redirect or show a success message here
      alert("Payment successful!");
    } catch (err) {
      setError("An error occurred during payment. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>
      <p>Please select your payment method:</p>

      <div className="mt-4">
        <label className="block mb-2">
          <input
            type="radio"
            value="telebirr"
            checked={paymentMethod === "telebirr"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Telebirr
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="cbe"
            checked={paymentMethod === "cbe"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          CBE (Commercial Bank of Ethiopia)
        </label>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handlePayment}
        className={`bg-red-500 text-white py-2 px-4 rounded mt-4 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Processing..." : "Confirm Payment"}
      </button>
    </div>
  );
};

export default Payment;
