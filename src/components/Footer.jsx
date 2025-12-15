import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="brand-serif">The Trail</span>
            <span className="brand-sans">LEESBURG</span>
          </Link>
          <button className="cookie-settings">Cookie Settings</button>
        </div>

        <div className="footer-section">
          <h3>Our Address</h3>
          <div className="footer-address">
            <p>37 Sycolin Road</p>
            <p>Leesburg, VA 20175</p>
            <p className="phone">(571) 200-2103</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Site Map</h3>
          <div className="footer-links-grid">
            <div className="footer-col">
              <Link to="/">Home</Link>
              <Link to="/floorplans">Floorplans</Link>
              <Link to="/neighborhood">Neighborhood</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <Link to="/amenities">Amenities</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/residents">Residents</Link>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <p>© 2025 The Trail Leesburg.</p>
          <p>All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="#">Privacy Policy</Link> / <Link to="#">Accessibility Statement</Link> /
            <Link to="#">DMCA</Link> / <Link to="#">Disclosures & Licenses</Link> /
            <Link to="#">Renters' Rights & Resources</Link> /
            <Link to="#">Customize Cookie Settings</Link> / <Link to="#">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
