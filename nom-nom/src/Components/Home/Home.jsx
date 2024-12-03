import React from 'react'
import pizza from "../../assets/burger.png";
import burger from "../../assets/pizza.jpg";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 text-center">
    <header className="mb-10">
      <h1 className="text-4xl font-bold text-gray-800">Your Logo</h1>
    </header>
    <main className="flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-5">
        Order fresh food at your doorsteps.
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Learn from our diverse menu, crafted to satisfy every craving!
      </p>
      <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
        Order Now
      </button>
      <div className="flex justify-center mt-10">
        <img src={burger} alt="Burger" className="w-40 h-auto mr-5" />
        <img src={pizza} alt="Pizza" className="w-40 h-auto" />
      </div>
    </main>
  </div>
);
};


export default Home
