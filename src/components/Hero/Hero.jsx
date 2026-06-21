import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <span className="hero-tag">
            ⭐ Luxury • Comfort • Premium Service
          </span>

          <h1>Welcome to Grand Palace Hotel</h1>

          <p>
            Experience luxury rooms, delicious dining, world-class hospitality,
            and unforgettable memories with Grand Hotel.
          </p>

          <div className="hero-buttons">
            <button
              className="book-btn"
              onClick={() => navigate("/rooms")}
            >
              🏨 Book Now
            </button>

            <button
              className="explore-btn"
              onClick={() => navigate("/contact")}
            >
              📞 Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;