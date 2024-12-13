// src/Components/Menu/Menu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Components/Cart/CartContext'; // Import useCart
import burger from '../../assets/burger.png';
import pizza from '../../assets/pizza2.jpeg';
import wings from '../../assets/chicken.jpeg';
import shawarma from '../../assets/shewarma.jpg';
import lasagna from '../../assets/lazanya.jpg';
import bruschetta from '../../assets/bruscheta.jpg';
import pasta from '../../assets/pasta.jpg';

const Menu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const menuItems = [
    { id: 1, name: 'Delicious Burger', price: 450, image: burger },
    { id: 2, name: 'Tasty Pizza', price: 399, image: pizza },
    { id: 3, name: 'Spicy Chicken Wings', price: 549, image: wings },
    { id: 4, name: 'Shawarma', price: 400, image: shawarma },
    { id: 5, name: 'Club Sandwich', price: 399, image: burger },
    { id: 6, name: 'Lasagna', price: 500, image: lasagna },
    { id: 7, name: 'Fettucini Alfredo', price: 559, image: wings },
    { id: 8, name: 'Bruschetta', price: 499, image: bruschetta },
    { id: 9, name: 'Pasta', price: 400, image: pasta },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate('/cart');
  };

  return (
    <div className="p-5 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <div key={item.id} className="border rounded-lg shadow-lg p-4">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.price} Birr</p>
            <button 
              onClick={() => handleAddToCart(item)}
              className="mt-2 bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;