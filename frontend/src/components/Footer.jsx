import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>A Zerodha-inspired trading platform built with MERN stack. Reference: <a href="https://zerodha.com/" target="_blank" rel="noopener noreferrer">https://zerodha.com/</a></p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/markets">Markets</a></li>
            <li><a href="https://zerodha.com/" target="_blank" rel="noopener noreferrer">Visit Zerodha</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Help Center</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Zerodha Clone. All rights reserved. This is an educational project.</p>
      </div>
    </footer>
  );
};

export default Footer;
