// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from"./Components/Home/Home";
import Menu from './Components/Menu/Menu';
// import About from './Components/About/About'; // Uncommented About
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart'; // Uncommented Cart
import FAQs from './Components/FAQs/FAQs';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/about" element={<About />} />  */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;