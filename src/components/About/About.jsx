// src/components/About/About.jsx
import React, { useEffect } from 'react';
import './About.css';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about__image', { duration: 1000, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.about__content', { duration: 1000, origin: 'right', distance: '50px' });
  }, []);

  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <img src="pics/about.jpg" alt="about" />
      </div>
      <div className="about__content">
        <h3>ABOUT</h3>
        <h2 className="section__header">Importance of Web Development</h2>
        <p className="section__subheader">
          Whether you're someone who uses the internet, 
           a student learning new things, or a developer 
          creating websites, understanding web development 
          is important. It's like the foundation for the 
          online world, helping us create new things and 
          make progress. This article will explain why web 
          development is so important, and how it helps 
          everyone, from students to developers, make the 
          internet a better place.
        </p>
      </div>
    </section>
  );
};

export default About;
