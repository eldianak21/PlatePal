import React, { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    return cartItems.length;
  };

  // Provide the cart state and functions to the context
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Export the CartContext for use in other components
export { CartContext };
