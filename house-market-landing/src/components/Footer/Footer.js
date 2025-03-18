import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>House<span>Market</span></h2>
            <p className="footer-tagline">Find your dream home today</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">TW</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LI</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/press">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Services</h3>
              <ul>
                <li><a href="/buy">Buy Property</a></li>
                <li><a href="/sell">Sell Property</a></li>
                <li><a href="/rent">Rent Property</a></li>
                <li><a href="/management">Property Management</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
                <li><a href="/gdpr">GDPR</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} HouseMarket. All rights reserved.
          </p>
          <p className="disclaimer">
            This is a demo project for a responsive React landing page.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
