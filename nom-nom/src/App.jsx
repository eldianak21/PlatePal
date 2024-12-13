// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/Cart/CartContext'; // Ensure the path is correct

import Home from "./Components/Home/Home";
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart'; 
import FAQs from './Components/FAQs/FAQs';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;