import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Guests Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <h3>Rahul Sharma</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Amazing rooms and excellent service.
            I will definitely visit again.
          </p>
        </div>

        <div className="testimonial-card">
          <h3>Priya Reddy</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Clean rooms, delicious food and friendly staff.
          </p>
        </div>

        <div className="testimonial-card">
          <h3>Arjun Kumar</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            One of the best hotel experiences I've had.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;