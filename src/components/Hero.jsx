import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Explore Nepal Like Never Before</h1>
        <p>Join us for unforgettable tours through mountains, valleys, and beyond.</p>
        <a href="#contact" className="book-btn">Book Now</a>
      </div>
    </section>
  );
};

export default Hero;
