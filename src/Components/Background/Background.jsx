import './Background.css';
import video1 from '../../assets/video1.mp4';

const Background = () => {
  return (
    <div className="background-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      
      <div className="content-overlay">
        <div className="content-left">
          <h1>Welcome to Velocity Vibes!</h1>
          <p>
            Experience the thrill where speed meets style! 
            Dive into the high-octane world of supercars.
          </p>
          <div className="center-button">
            <button>Explore More</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Featured Cars</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Supercar Model 1</h3>
            <p>Top Speed: 200 mph</p>
            <p>Power: 700 HP</p>
          </div>
          <div className="feature-card">
            <h3>Supercar Model 2</h3>
            <p>Top Speed: 220 mph</p>
            <p>Power: 800 HP</p>
          </div>
          <div className="feature-card">
            <h3>Supercar Model 3</h3>
            <p>Top Speed: 210 mph</p>
            <p>Power: 750 HP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
