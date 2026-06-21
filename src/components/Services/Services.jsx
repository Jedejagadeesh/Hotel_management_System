import "./Services.css";

function Services() {
  return (
    <section className="services">

      <h2>Our Services</h2>

      <p className="subtitle">
        Enjoy premium facilities during your stay.
      </p>

      <div className="service-container">

        <div className="service-card">
          <div className="icon">🛏️</div>
          <h3>Luxury Rooms</h3>
          <p>Comfortable rooms with premium interiors.</p>
        </div>

        <div className="service-card">
          <div className="icon">🍽️</div>
          <h3>Restaurant</h3>
          <p>Delicious food prepared by expert chefs.</p>
        </div>

        <div className="service-card">
          <div className="icon">🏊</div>
          <h3>Swimming Pool</h3>
          <p>Relax and enjoy our outdoor pool.</p>
        </div>

        <div className="service-card">
          <div className="icon">📶</div>
          <h3>Free Wi-Fi</h3>
          <p>High-speed internet across the hotel.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;