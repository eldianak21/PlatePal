import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Components/Cart/CartContext";

import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import CreateAccount from "./Components/Login/CreateAccount"; // Account creation component
import Payment from "./Components/Payment/Payment"; // New Payment component
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Last from "./Components/Last/Last";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/Login/ForgotPassword";
import FAQs from "./Components/FAQs/FAQs";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Last />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;