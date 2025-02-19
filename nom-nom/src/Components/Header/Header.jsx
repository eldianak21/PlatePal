import React from "react";
import { Link } from "react-router-dom";
import "material-icons/iconfont/material-icons.css"; // Ensure this import is present
import { useAuth } from "../../Components/Login/UserContext"; // Adjust path as necessary
import { useCart } from "../../Components/Cart/CartContext"; // Import useCart

const Header = () => {
  const { getCartCount } = useCart(); // Get the cart count function
  const user = useAuth(); // Get the logged-in user from context
  const cartCount = getCartCount(); // Get the current cart count

  return (
    <header className="sticky top-0 z-50 bg-red-500 bg-opacity-90 text-white backdrop-blur-lg shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/">PlatePal</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/faqs" className="hover:underline">
            FAQs
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {user && (
            <span className="text-lg">
              {user.displayName ? user.displayName : user.email}
            </span>
          )}
          <Link
            to="/create-account"
            className="hover:underline flex items-center"
          >
            <i className="material-icons">account_circle</i>{" "}
            {/* Account icon */}
          </Link>
          <div className="relative">
            <Link to="/cart" className="flex items-center">
              <i className="material-icons">shopping_cart</i>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 text-green-700 rounded-full px-2 py-0.5 text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
