import React, { useState, useEffect } from 'react';
import { FaMountain, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let currentSectionId = sections[0]?.id || '';

      for (let section of sections) {
        if (section.offsetTop <= scrollPos) {
          currentSectionId = section.id;
        }
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaMountain className="icon" />
        Everest Tours
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleLinkClick}>About</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={handleLinkClick}>Services</a></li>
        <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={handleLinkClick}>Gallery</a></li>
        <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={handleLinkClick}>Testimonials</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
