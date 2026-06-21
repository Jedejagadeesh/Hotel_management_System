import "./Amenities.css";

function Amenities() {
  const amenities = [
    "📶 Free WiFi",
    "🏊 Swimming Pool",
    "🍽 Restaurant",
    "🚗 Free Parking",
    "💪 Gym",
    "🛎 24/7 Room Service",
  ];

  return (
    <section className="amenities">
      <h2>Hotel Amenities</h2>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;