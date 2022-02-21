import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
  import Home from "./Home";
  import AboutUs from "./AboutUs";
  import Service from "./Service";
  import Menu from "./Menu";
  import Contact from "./Contact";
  


function App() {
  
  return (
    <Router>
      <nav>
        <img className='imgLogo' src="https://thumbs.dreamstime.com/b/percent-organic-logo-design-natural-healty-food-sign-vector-illustrations-167849880.jpg" width="100px" alt="logo"/>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>AboutUs</Link>
        <Link to="/service" className='link'>Service</Link>
        <Link to="/menu" className='link'>Menu</Link>
        <Link to="/contact" className='link'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;
