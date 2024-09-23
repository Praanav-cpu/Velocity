// Import React
import React from 'react';
import './RoadRacer.css'; // Import the CSS file
import imgagera from '../assets/imgagera.jpg'; // Import the hero image
import image1 from '../assets/image1.webp'; // Import additional gallery images
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.webp';

// RoadRacer Component
const RoadRacer = () => {
  return (
    <div className="road-racer-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={imgagera} alt="Road Racer Car" className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-text">
              <h1>Road Racer</h1>
              <p>Experience the ultimate thrill with high-speed racing!</p>
              <button className="hero-button">Start Your Journey</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Road Racer?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={image1} alt="Feature 1" className="feature-image" />
            <h3>High-Speed Performance</h3>
            <p>Unmatched speed with perfect handling to fuel your racing desire.</p>
          </div>
          <div className="feature-card">
            <img src={image2} alt="Feature 2" className="feature-image" />
            <h3>Customizable Vehicles</h3>
            <p>Upgrade your car with various customization options.</p>
          </div>
          <div className="feature-card">
            <img src={image3} alt="Feature 3" className="feature-image" />
            <h3>Dynamic Tracks</h3>
            <p>Race across urban streets, desert landscapes, and mountain trails.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadRacer;
