import React from 'react';
import './FloorplanCard.css';

const FloorplanCard = ({ plan, onClick }) => {
  return (
    <div className="floorplan-card" onClick={() => onClick(plan)}>
      <div className="floorplan-image-container">
        <img src={plan.image} alt={plan.name} className="floorplan-image" />
      </div>
      <div className="floorplan-details">
        <h3 className="floorplan-name">{plan.name}</h3>
        <div className="floorplan-specs">
          <span>{plan.type === 'Studio' ? 'Studio' : `${plan.beds} bed`}</span>
          <span>{plan.baths} bath</span>
          <span>{plan.sqft} sq. ft.</span>
        </div>
        <div className="floorplan-price-row">
          {plan.contactUs || !plan.price ? (
            <span className="floorplan-contact">Contact Us</span>
          ) : (
            <span className="floorplan-price">Rent ${plan.price.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloorplanCard;
