import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="brand-serif">The Trail</span>
          <span className="brand-sans">LEESBURG</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/design">Design</Link>
          <Link to="/neighborhood">Neighborhood</Link>
          <Link to="/amenities">Amenities</Link>
          <Link to="/gallery">Gallery</Link>
          <button className="menu-button">
            <Menu size={24} color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
