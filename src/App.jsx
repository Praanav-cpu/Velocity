import React, { useState } from 'react';
// import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Ensure this is correct
import Home from './Components/Background/Background';
import VelocityVibes from './Pages/VelocityVibes';
import TorqueZone from './Pages/TorqueZone';
import RoadRacer from './Pages/RoadRacer';


const App = () => {
  // const heroData = [
  //   { text1: "Dive into", text2: "what you love" },
  //   { text1: "Indulge", text2: "your passion" },
  //   { text1: "Give in to", text2: "your passion" },
  // ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // Function to handle next hero text
  const handleNextHero = () => {
    setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
  };

  // Function to toggle play status
  const togglePlayStatus = () => {
    setPlayStatus((prevStatus) => !prevStatus);
  };

  return (
    <div>

<Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/velocity-vibes" element={<VelocityVibes />} />
          <Route path="/torque-zone" element={<TorqueZone />} />
          <Route path="/road-racer" element={<RoadRacer />} />
        </Routes>
      </div>
    </Router>
      {/* Passing heroData and updated heroCount */}
      {/* <Background playStatus={playStatus} heroCount={heroCount} heroData={heroData[heroCount]} /> */}
      

      {/* Controls for playStatus and navigating through heroData */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
      </div>
    </div>
  );
};
export default App;
