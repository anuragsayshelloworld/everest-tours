import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          At Everest Tours, we specialize in crafting unforgettable travel experiences across Nepal. 
          With expert local guides and personalized itineraries, we make your adventure safe, comfortable, and culturally rich.
        </p>
        <ul className="highlights">
          <li>🧭 Expert Local Guides</li>
          <li>🎒 Customized Tour Packages</li>
          <li>🛡️ Safety & Comfort Priority</li>
          <li>🏞️ Authentic Cultural Experiences</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
