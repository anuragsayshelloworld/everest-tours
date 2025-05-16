import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // For now, just simulate submit
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        {submitted && <p className="success-msg">Thank you! We will get back to you soon.</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="5"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>📞 +977 123 456 7890</p>
          <p>✉️ info@everesttours.com</p>
          <p>🏔️ Kathmandu, Nepal</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
