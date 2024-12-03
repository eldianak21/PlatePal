import React from 'react';
import pizza from "../../assets/pizza.jpg"; // Ensure this is the correct path
import burger from "../../assets/burger.png"; // Ensure this is the correct path
import pasta from "../../assets/pasta.jpg"; // New image
import salad from "../../assets/bruscheta.jpg"; // New image
import logo from '../../assets/logo2.png'; // Logo image

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center p-5">
      {/* Main Content Section */}
      <div className="flex flex-col items-center mb-10">
        <img src={logo} alt="Your Logo" className="w-32 h-auto mb-5" />
        <h2 className="text-4xl font-semibold text-gray-800 mb-5 transition-transform duration-300 transform hover:scale-105">
          Order Fresh Food Delivered to Your Doorstep
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Explore our diverse menu, crafted to satisfy every craving!
        </p>
        <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105">
          Order Now
        </button>
      </div>

      {/* Menu Items Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10 max-w-6xl w-full">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
          <img src={burger} alt="Delicious Burger" className="w-full h-32 object-cover rounded-lg mb-2" />
          <h3 className="font-semibold text-lg text-gray-700">Delicious Burger</h3>
          <p className="text-gray-600">$5.99</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
          <img src={pizza} alt="Tasty Pizza" className="w-full h-32 object-cover rounded-lg mb-2" />
          <h3 className="font-semibold text-lg text-gray-700">Tasty Pizza</h3>
          <p className="text-gray-600">$7.99</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
          <img src={pasta} alt="Creamy Pasta" className="w-full h-32 object-cover rounded-lg mb-2" />
          <h3 className="font-semibold text-lg text-gray-700">Creamy Pasta</h3>
          <p className="text-gray-600">$8.49</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
          <img src={salad} alt="Fresh Salad" className="w-full h-32 object-cover rounded-lg mb-2" />
          <h3 className="font-semibold text-lg text-gray-700">Fresh Salad</h3>
          <p className="text-gray-600">$4.99</p>
        </div>
      </section>
    </div>
  );
}

export default Home;