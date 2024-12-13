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
    <div className="p-5 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <h2 className="font-semibold">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;