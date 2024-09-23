import './Background.css';
import video1 from  '../../assets/video1.mp4';


const Background = ({ playStatus, heroCount }) => {
  return (
    <div className="background-container">
      
      <video className="background-video" autoPlay loop muted>
        <source src={video1} type="video/mp4" />

      </video>
      <div className="content-left">
        <p>
          Welcome to the Velocity Vibes experience, where speed meets style! 
          This is your chance to explore the high-octane world of supercars.
        </p>
      </div>

      <div className="center-button">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default Background;
