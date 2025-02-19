import React, { useState } from "react";
import { Link } from "react-router-dom";
import "material-icons/iconfont/material-icons.css"; // Ensure this import is present

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

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
      <div className="flex items-center space-x-4"> {/* Grouping account and cart icons */}
        <Link to="/create-account" className="hover:underline flex items-center">
          <i className="material-icons">account_circle</i> {/* Account icon */}
        </Link>
        <div className="relative">
          <Link to="/cart" className="flex items-center">
            <i className="material-icons">shopping_cart</i>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;