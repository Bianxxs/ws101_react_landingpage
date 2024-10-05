// src/components/Importance/Importance.jsx
import React, { useEffect } from 'react';
import './Importance.css';
import ScrollReveal from 'scrollreveal';

const Importance = () => {
  useEffect(() => {
    const scrollRevealOption = { distance: "50px", origin: "left", duration: 1000 };
    
    ScrollReveal().reveal(".importance__section", { ...scrollRevealOption, delay: 900 });
    ScrollReveal().reveal(".additional__item", { ...scrollRevealOption, delay: 2000 });
    ScrollReveal().reveal(".section__header", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".section__paragraph", { ...scrollRevealOption, delay: 1500 });
  }, []);

  return (
    <>
      <section className="importance__section">
        <h2 className="section__header" id="myBut">WHAT IS WEB DEVELOPMENT AND WHY IS IT IMPORTANT?</h2>
        <p className="section__paragraph">
          Web development refers to the process of building and maintaining websites. It encompasses a variety of tasks, including web design, web content development, client-side and server-side scripting, and network security configuration. Understanding web development is crucial because it powers the digital experiences we encounter daily. It enables businesses to establish their online presence, provides educational resources, and facilitates communication through various platforms. By mastering web development, individuals and organizations can leverage the internet to innovate, connect with audiences, and drive progress in their respective fields.
        </p>
      </section>

      <section className="section__container additional__container">
        <div className="additional__item">
          <img src="pics/image4.png" alt="Container 1" />
          <div className="additional__content">
            <h3>Global Reach</h3>
            <p>
              Web development helps people and businesses create a strong online presence, making it possible to connect with people everywhere and access information globally. Websites act like digital stores, showing off products and services to people all over the world. They make online shopping easy and open up new opportunities for businesses to grow. Additionally, web development supports better communication and teamwork, letting people share ideas and connect with others, no matter where they are.
            </p>
          </div>
        </div>
        <div className="additional__item">
          <img src="pics/image1.png" alt="Container 2" />
          <div className="additional__content">
            <h3>Broad Access</h3>
            <p>
              Web development has made information available to everyone, regardless of where they live, and has promoted inclusivity. Social media has become a strong tool for sharing ideas and driving positive change. It has also changed education, with online learning giving students around the world easy and flexible ways to learn. Additionally, web development has improved areas like healthcare and government, making things work better and improving people's lives.
            </p>
          </div>
        </div>
        <div className="additional__item">
          <img src="pics/image2.png" alt="Container 3" />
          <div className="additional__content">
            <h3>Business Boost</h3>
            <p>
              Web development has changed the business world, creating many chances for growth and success. A well-made website can make a brand more visible, draw in customers, and increase sales. Online shopping sites have changed how people buy things, letting businesses sell to customers around the world. Web apps and software make running a business easier, improve efficiency, and help manage resources. Today, businesses without a strong online presence are falling behind, showing how crucial web development is for staying competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="section__container conclusion__container">
        <h2 className="section__header">Conclusion</h2>
        <p className="section__paragraph">
          Web development is now a key part of our daily lives, affecting how we connect, learn, and do business. It has a big impact on society and companies, helping people connect worldwide, access information, and drive new ideas. As web development keeps changing, developers will lead the way in shaping the digital world. The future looks promising with new technologies and a focus on creating great online experiences. In our digital age, web development continues to drive progress and empower people, businesses, and communities.
        </p>
      </section>
    </>
  );
};

export default Importance;
