import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BoominBusiness</h3>
            <p>Your trusted partner for computer hardware import and export worldwide.</p>
            <p>Connecting technology across borders with quality and reliability.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><a href="#processors">Processors</a></li>
              <li><a href="#graphics-cards">Graphics Cards</a></li>
              <li><a href="#motherboards">Motherboards</a></li>
              <li><a href="#memory">Memory & Storage</a></li>
              <li><a href="#peripherals">Peripherals</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 kjcsaravanak@gmail.com</p>
            <p>📞 +91 8885351814</p>
            <p>📍 No. 02, Ammavaripeta Venkatagiri Town, Venkatagiri Sri Potti Sriramulu Nellore Andhra Pradesh, 524132</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 TechParts Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;