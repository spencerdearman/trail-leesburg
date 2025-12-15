import React, { useEffect } from 'react';
import './FloorplanModal.css';

const FloorplanModal = ({ plan, onClose }) => {


  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{plan.name}</h2>
            <div className="modal-specs">
              <span>{plan.type === 'Studio' ? 'Studio' : `${plan.beds} bed`}</span>
              <span className="separator">|</span>
              <span>{plan.baths} bath</span>
              <span className="separator">|</span>
              <span>{plan.sqft} sq. ft.</span>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <img src={plan.image} alt={plan.name} className="modal-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorplanModal;
