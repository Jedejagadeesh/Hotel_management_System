import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>

      <p>Get offers and updates directly in your inbox.</p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;