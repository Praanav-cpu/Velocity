import React from 'react';
import './VelocityVibes.css';
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.webp";

const VelocityVibes = () => {
  return (
    <div className="velocity-vibes-container">
      <header className="hero-section">
        <h1 className="title">Velocity Vibes</h1>
        <p className="subtitle">Welcome to the world of high-speed sports cars!</p>
      </header>

      <section className="car-gallery">
        <h2 className="section-title">Car Gallery</h2>
        <div className="car-images">
          <img src={image1} alt="Sports Car 1" className="car-image" />
          <img src={image2} alt="Sports Car 2" className="car-image" />
          <img src={image3} alt="Sports Car 3" className="car-image" />
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Velocity Vibes</h2>
        <p className="about-text">
          At Velocity Vibes, we celebrate the thrill of speed and the beauty of sports cars.
          Join us as we explore the latest models, performance stats, and everything that fuels
          the passion of car enthusiasts!
        </p>
      </section>

      <section className="features-section">
  <h2 className="section-title">Features</h2>
  <div className="feature-cards">
    <div className="feature-card">
      <img src="https://i.pinimg.com/564x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg" alt="Reviews Icon" className="feature-icon" />
      <h3>Exclusive Reviews</h3>
      <p>Get in-depth reviews of the latest sports cars with detailed analysis and expert opinions.</p>
    </div>
    <div className="feature-card">
      <img src="https://i.pinimg.com/736x/ab/57/fe/ab57fe457fb46a0da3df86bf22923c01.jpg" alt="Comparisons Icon" className="feature-icon" />
      <h3>Performance Comparisons</h3>
      <p>Compare different models and find the perfect sports car that suits your needs.</p>
    </div>
    <div className="feature-card">
      <img src="https://i.pinimg.com/564x/a4/89/ff/a489ff86c6cc2b817e36759eec53ca23.jpg" alt="News Icon" className="feature-icon" />
      <h3>Latest News</h3>
      <p>Stay updated with the latest trends, releases, and innovations in the automotive world.</p>
    </div>
    <div className="feature-card">
      <img src="https://i.pinimg.com/564x/e9/2e/c9/e92ec9975ebc6c93d59de000e0a266bf.jpg" alt="Community Icon" className="feature-icon" />
      <h3>Community Discussions</h3>
      <p>Join discussions with fellow enthusiasts and share your passion for high-speed cars.</p>
    </div>
  </div>
</section>


     
    </div>
  );
};

export default VelocityVibes;
