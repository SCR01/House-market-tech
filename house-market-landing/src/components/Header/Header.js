import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Handle Get Started button click
  const handleGetStartedClick = () => {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>House<span>Market</span></h1>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => handleNavClick('home')}>Home</a></li>
            <li><a href="#services" onClick={() => handleNavClick('services')}>Services</a></li>
            <li><a href="#users" onClick={() => handleNavClick('users')}>Users</a></li>
            <li><a href="#pricing" onClick={() => handleNavClick('pricing')}>Pricing</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-cta">
          <button className="btn btn-primary" onClick={handleGetStartedClick}>Get Started</button>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
