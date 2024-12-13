// src/Components/About/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-50">
      <div className="max-w-3xl mx-auto bg-yellow-75 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-white bg-red-500 rounded p-4 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4 transition-transform duration-300 transform hover:scale-105 hover:opacity-90">
          Welcome to NomNom, your go-to place for delicious food! Our mission is to provide 
          the best dining experience with a variety of mouth-watering dishes that cater to 
          every taste.
        </p>
        <p className="text-lg text-gray-700 mb-4 transition-transform duration-300 transform hover:scale-105 hover:opacity-90">
          At NomNom, we believe in using fresh, high-quality ingredients to create dishes 
          that not only satisfy your hunger but also delight your palate. Our team of 
          passionate chefs works tirelessly to bring you culinary creations that you'll love.
        </p>
        <h2 className="text-2xl font-semibold text-white bg-red-500 rounded p-2 mt-6">Our Values</h2>
        <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
          <li className="transition-transform duration-300 transform hover:scale-105 hover:opacity-90">Quality: We prioritize top-notch ingredients.</li>
          <li className="transition-transform duration-300 transform hover:scale-105 hover:opacity-90">Customer Satisfaction: Your happiness is our goal.</li>
          <li className="transition-transform duration-300 transform hover:scale-105 hover:opacity-90">Innovation: We love to experiment and create new flavors.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4 transition-transform duration-300 transform hover:scale-105 hover:opacity-90">
          Thank you for choosing NomNom. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;