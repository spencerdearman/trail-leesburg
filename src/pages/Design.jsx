import React from 'react';
import './Design.css';

const Design = () => {
  const teamMembers = [
    {
      id: 'dcs',
      name: 'DCS Design',
      role: 'Architect',
      logoSrc: '/assets/logos/dcs.png'
    },
    {
      id: 'clay',
      name: 'CLAY CONSTRUCTION',
      role: 'Pre-Construction Consultants',
      logoSrc: '/assets/logos/clay.png'
    },
    {
      id: 'urban',
      name: 'urban',
      role: 'Civil Engineer / Landscape',
      logoSrc: '/assets/logos/urban.png'
    },
    {
      id: 'cates',
      name: 'CATES ENGINEERING',
      role: 'Structural Engineer',
      logoSrc: '/assets/logos/cates.png'
    },
    {
      id: 'mep',
      name: 'MEP Designs',
      role: 'MEP Engineer',
      logoSrc: '/assets/logos/mep.png'
    },
    {
      id: 'wldwst',
      name: 'wldwst',
      role: 'Interior Design',
      logoSrc: '/assets/logos/wldwst.png'
    }
  ];

  return (
    <div className="design-page">
      {/* Hero Section */}
      <div className="design-hero">
        <img src="/assets/design-image.png" alt="The Trail Leesburg Building Rendering" />
        <div className="hero-overlay-text">
          <h1>Design</h1>
        </div>
      </div>

      {/* Developer Section */}
      <div className="developer-section">
        <div className="developer-container">
          <div className="developer-info">
            <h2>BigT Properties</h2>
            <p>Developer</p>
          </div>
          <div className="developer-description">
            <p>
              Dedicated to creating exceptional living spaces that blend modern luxury with community heritage. 
              Our commitment to quality and detail ensures that every project stands the test of time.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>DESIGN TEAM</h2>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="logo-placeholder">
                <img src={member.logoSrc} alt={`${member.name} logo`} className="team-logo" />
              </div>
              <span className="role-title">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
