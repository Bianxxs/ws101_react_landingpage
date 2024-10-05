// src/components/NavBar/NavBar.jsx
import React, { useEffect } from 'react';
import './Navbar.css';
import ScrollReveal from 'scrollreveal'; // Correct ES6 import

const Navbar = () => {
  useEffect(() => {
    ScrollReveal().reveal('.links_navigation', { duration: 1500 });
  }, []);

  return (
    <nav>
      <div className="nav" id="home">
        <div className="logo"><a href="#">BhiaTriz</a></div>
        <ul className="links_navigation">
          <li className="link"><a href="#home">HOME</a></li>
          <li className="link"><a href="#about">ABOUT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
