import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">

      <div className="left">

        <h2>Why Choose Grand Hotel?</h2>

        <p>
          We provide the perfect combination of luxury,
          comfort and affordable pricing for every guest.
        </p>

        <div className="feature">
          <span>✅</span>
          <p>24/7 Customer Support</p>
        </div>

        <div className="feature">
          <span>✅</span>
          <p>Free High-Speed Wi-Fi</p>
        </div>

        <div className="feature">
          <span>✅</span>
          <p>Swimming Pool & Spa</p>
        </div>

        <div className="feature">
          <span>✅</span>
          <p>Restaurant & Room Service</p>
        </div>

      </div>

      <div className="right">

        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900"
          alt="Hotel Room"
        />

      </div>

    </section>
  );
}

export default WhyChooseUs;