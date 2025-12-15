import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home-image.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${homeImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* Content can be added here if needed, e.g., "Find Your Home" button if not in navbar */}
        </div>
      </section>

      {/* Expect More Section */}
      <section className="expect-more-section">
        <div className="expect-more-container">
          <div className="expect-more-heading">
            <h2>Expect More</h2>
          </div>
          <div className="expect-more-content">
            <p>
              Welcome home to The Trail Leesburg, a luxury apartment community where you can expect more. 
              Conveniently located minutes from the Silver Line, our brand-new Class A apartments redefine 
              upscale living in Leesburg with a curated offering of studio, 1, 2 and 3 bedroom residences. 
              Step inside and discover more in every detail—from gourmet kitchens with sleek quartz countertops 
              and designer black accents to an expansive amenity package that offers more luxury, more experiences 
              and more connection within our community.
            </p>
            <div className="expect-more-buttons">
              <Link to="/amenities" className="btn btn-olive">View Amenities</Link>
              <Link to="/contact" className="btn btn-olive">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Design Section */}
      <section className="design-section">
        <div className="design-container">
          <div className="design-content-block">
            <h2>High-End Design</h2>
            <p>Offered in Studio, 1, 2 and 3 Bedroom Floorplans</p>
            <Link to="/floorplans" className="btn btn-transparent">View Floorplans</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview-section">
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-text">
              <span className="gallery-subtitle">Choose Your Floorplan</span>
              <h3>More Options</h3>
            </div>
            {/* Placeholder for image background */}
          </div>
          <div className="gallery-item">
            <div className="gallery-text">
              <span className="gallery-subtitle">View Our Amenities</span>
              <h3>More To Do</h3>
            </div>
            {/* Placeholder for image background */}
          </div>
          <div className="gallery-item">
            <div className="gallery-text">
              <span className="gallery-subtitle">Browse the Gallery</span>
              <h3>More to See</h3>
            </div>
            {/* Placeholder for image background */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
