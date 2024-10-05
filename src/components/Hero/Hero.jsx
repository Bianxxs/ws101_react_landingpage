// src/components/Header/Header.jsx
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Hero.css'; // Adjust the path if necessary

const Hero = () => {
  useEffect(() => {
    const scrollRevealOptions = {
      duration: 1000,
    };

    // Applying ScrollReveal to the specified elements
    ScrollReveal().reveal('.container_head img', {
      duration: 1000,
    });

    ScrollReveal().reveal('.container_head h1', {
      ...scrollRevealOptions,
      delay: 500,
    });

    ScrollReveal().reveal('.container_head p', {
      ...scrollRevealOptions,
      delay: 1000,
    });

    ScrollReveal().reveal('.head__btns', {
      ...scrollRevealOptions,
      delay: 1500,
    });
  }, []);

  return (
    <header className="header">
      <div className="container_head">
        <div className="content">
          <h1>Web Development: The Engine of 
            Innovation and 
            Progress</h1>
          <div className="head__btns">
            <button className="btn btn__primary" id="myButton">Learn More</button>
          </div>
        </div>
        <div className="header__image">
          <img src="pics/header.png" alt="header" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
