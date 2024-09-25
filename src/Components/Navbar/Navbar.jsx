// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://i.pinimg.com/564x/0a/fe/39/0afe39baaab7e61e4a2269ca8dc57317.jpg" alt="Logo" className="logo" />
        </Link>
            <div className="navbar-logo2">
              <Link to="/p">
                 <img src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_640.png" alt="Logo" className="logo" />
              </Link>
            </div>
            <div>
            <ul className="navbar-links">
        
               <li><Link to="/">Home</Link></li>
               <li><Link to="/velocity-vibes">Velocity Vibes</Link></li>
               <li><Link to="/torque-zone">Torque Zone</Link></li>
               <li><Link to="/road-racer">Road Racer</Link></li>
             </ul>
    
            </div>
      </div>
    </nav>
  );
}

export default Navbar;
