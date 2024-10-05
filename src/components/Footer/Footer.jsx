// src/components/Footer/Footer.jsx
import React, { useEffect } from 'react';
import './Footer.css';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal('.footer__container', { duration: 1000, origin: 'bottom', distance: '50px' });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <p>&copy; 2024 BhiaTriz. All rights reserved.</p>
          <p><a href="#home">Back to Top</a></p>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
