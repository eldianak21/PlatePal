// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CartProvider } from "./Components/Cart/CartContext";
// import { UserProvider } from "./Components/Login/UserContext"; // Import the UserProvider

// import Home from "./Components/Home/Home";
// import Menu from "./Components/Menu/Menu";
// import Cart from "./Components/Cart/Cart";
// import CreateAccount from "./Components/Login/CreateAccount";
// import Payment from "./Components/Payment/Payment";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import Last from "./Components/Last/Last";
// import Contact from "./Components/Contact/Contact";
// import About from "./Components/About/About";
// import Login from "./Components/Login/Login";
// import ForgotPassword from "./Components/Login/ForgotPassword";
// import FAQs from "./Components/FAQs/FAQs";

// function App() {
//   return (
//     <CartProvider>
//       <UserProvider>
//         {" "}
//         {/* Wrap your app with UserProvider */}
//         <Router>
//           <div className="flex flex-col min-h-screen">
//             <Header />
//             <main className="flex-grow">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/menu" element={<Menu />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/faqs" element={<FAQs />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/create-account" element={<CreateAccount />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/forgot-password" element={<ForgotPassword />} />
//                 <Route path="/payment" element={<Payment />} />
//                 <Route path="/confirmation" element={<Last />} />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </Router>
//       </UserProvider>
//     </CartProvider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Components/Cart/CartContext";
import { UserProvider } from "./Components/Login/UserContext";

import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import CreateAccount from "./Components/Login/CreateAccount";
import Payment from "./Components/Payment/Payment";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Last from "./Components/Last/Last";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/Login/ForgotPassword";
import FAQs from "./Components/FAQs/FAQs";
import AuthGuard from "./Components/Auth/AuthGuard"; // Import the AuthGuard

function App() {
  return (
    <CartProvider>
      <UserProvider>
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
                <Route
                  path="/payment"
                  element={
                    <AuthGuard>
                      <Payment />
                    </AuthGuard>
                  }
                />
                <Route path="/confirmation" element={<Last />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
