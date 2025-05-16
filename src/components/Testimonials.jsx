import React from 'react';
import './Testimonials.css';

import sophie from '../assets/sophie.jpg';
import liam from '../assets/liam.jpg';
import aarav from '../assets/aarav.jpg';

const testimonials = [
  {
    name: "Sophie Williams",
    feedback: "The Everest Base Camp trek was an unforgettable experience! Everest Tours took care of everything — it was smooth, safe, and magical.",
    image: sophie
  },
  {
    name: "Liam Chen",
    feedback: "Absolutely loved the professionalism. Our guide was knowledgeable and friendly. I highly recommend Everest Tours for first-timers!",
    image: liam
  },
  {
    name: "Aarav Sharma",
    feedback: "The views, the hospitality, and the planning were all perfect. Thanks for the lifetime memory!",
    image: aarav
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <p>"{item.feedback}"</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
