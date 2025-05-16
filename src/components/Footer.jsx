import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Everest Tours</h3>
        <p>Follow us for daily travel inspiration and Himalayan beauty.</p>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>

        <p className="footer-bottom">© {new Date().getFullYear()} Everest Tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
