import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  // Assuming you have a function to handle adding items to the cart
  const handleAddItemToCart = () => {
    // ... logic to add item to cart
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-red-500 text-white">
      <div className="text-lg font-bold">
        <Link to="/">PlatePal</Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/menu" className="hover:underline">Menu</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/faqs" className="hover:underline">FAQs</Link>
      </nav>
      <div className="relative">
        <Link to="/cart">
          <i className="material-icons">shopping_cart</i>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-1 text-xs">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;