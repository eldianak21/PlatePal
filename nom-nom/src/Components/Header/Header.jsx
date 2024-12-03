import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-red-500 text-white">
      <div className="text-lg font-bold">
        <Link to="/">Your Logo</Link>
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
          <span className="material-icons">shopping_cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;