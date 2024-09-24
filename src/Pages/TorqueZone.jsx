// Import React
import React from 'react';
import './TorqueZone.css'; 
import videoDrift from '../assets/videoDrift.mp4';
import driftImage1 from '../assets/driftImage1.avif';
import driftImage2 from '../assets/driftImage2.webp';
import driftImage3 from '../assets/driftImage3.jpg';

// TorqueZone Component
const TorqueZone = () => {
  return (
    <div className="torque-zone-container">
      {/* Hero Section with Background Video */}
      <section className="hero-section">
        <div className="video-overlay">
        <video className="background-video" autoPlay loop muted>
        <source src={videoDrift} type="video/mp4" />
        <div className="hero-text">
            <h1>Torque Zone</h1>
            <p>Feel the adrenaline of ultimate drifting!</p>
            <button className="hero-button">Join the Drift</button>
          </div>
      </video>
          <div className="hero-text">
            <h1>Torque Zone</h1>
            <p>Feel the adrenaline of ultimate drifting!</p>
            <button className="hero-button">Join the Drift</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Drift in Torque Zone?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={driftImage1} alt="Drift Feature 1" className="feature-image" />
            <h3>Unleash Maximum Torque</h3>
            <p>Experience powerful cars built for pure drift performance.</p>
          </div>
          <div className="feature-card">
            <img src={driftImage2} alt="Drift Feature 2" className="feature-image" />
            <h3>Custom Drift Tracks</h3>
            <p>Race on unique drift circuits designed for intense thrill.</p>
          </div>
          <div className="feature-card">
            <img src={driftImage3} alt="Drift Feature 3" className="feature-image" />
            <h3>Upgrade Your Ride</h3>
            <p>Personalize and enhance your car for the best drift experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TorqueZone;
