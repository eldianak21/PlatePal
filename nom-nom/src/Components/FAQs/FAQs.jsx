import React from 'react';

const FAQs = () => {
  const faqs = [
    { question: "How do I place an order?", answer: "Simply add items to your cart and proceed to checkout." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and more." },
    { question: "Do you offer delivery?", answer: "Yes, we deliver to various locations. Check our delivery area." },
    { question: "Can I change my order after placing it?", answer: "Yes, you can modify your order within a certain timeframe." },
    { question: "What should I do if I receive a damaged item?", answer: "Please contact our support team, and we'll assist you with a replacement." },
    { question: "Do you offer discounts for bulk orders?", answer: "Yes, we have special pricing for bulk purchases. Contact us for more details." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-50">
      <div className="w-full max-w-4xl mx-auto bg-yellow-75 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-white bg-red-500 rounded p-4 mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <h2 className="font-semibold text-gray-800">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;