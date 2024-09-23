// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/velocity-vibes">Velocity Vibes</Link></li>
        <li><Link to="/torque-zone">Torque Zone</Link></li>
        <li><Link to="/road-racer">Road Racer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
