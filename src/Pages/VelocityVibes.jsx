import React from 'react';
import './VelocityVibes.css';
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.webp";



const VelocityVibes = () => {
  return (
    <div>
      <h1>Velocity Vibes</h1>
      <p>Welcome to the world of high-speed sports cars!</p>
      <div className="car-images">
      <img src={image1} alt="image1" className="car-image" />
        <img src={image2} alt="image2" className="car-image"/>
        <img src={image3} alt="image3" className="car-image"/>
       

      </div>
    </div>
  );
};
export default VelocityVibes;
