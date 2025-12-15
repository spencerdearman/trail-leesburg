import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="brand-serif">The Trail</span>
            <span className="brand-sans">LEESBURG</span>
          </Link>
          
          <div className="navbar-links">
            <Link to="/design">Design</Link>
            <Link to="/neighborhood">Neighborhood</Link>
            <Link to="/amenities">Amenities</Link>
            <Link to="/gallery">Gallery</Link>
            <button className="menu-button" onClick={toggleMenu}>
              <Menu size={24} color="white" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="menu-overlay">
          <button className="close-button" onClick={closeMenu}>
            <X size={32} color="white" />
          </button>
          
          <div className="menu-content">
            <Link to="/" className="menu-link box-link" onClick={closeMenu}>Home</Link>
            <Link to="/amenities" className="menu-link" onClick={closeMenu}>Amenities</Link>
            <Link to="/floorplans" className="menu-link" onClick={closeMenu}>Floorplans</Link>
            <Link to="/gallery" className="menu-link" onClick={closeMenu}>Gallery</Link>
            <Link to="/neighborhood" className="menu-link" onClick={closeMenu}>Neighborhood</Link>
            <Link to="/residents" className="menu-link" onClick={closeMenu}>Residents</Link>
            <Link to="/contact" className="menu-link" onClick={closeMenu}>Contact</Link>
            
            <button className="find-home-button">Find Your Home</button>
            
            <div className="menu-footer">
              <div className="address">
                <p>37 Sycolin Road</p>
                <p>Leesburg, VA 20175</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
