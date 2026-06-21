  import "./Footer.css";

  function Footer() {
    return (
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-section">
            <h2>🏨 Grand Hotel</h2>
            <p>
              Experience luxury, comfort, and unforgettable
              hospitality with us.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>Rooms</li>
              <li>Bookings</li>
              <li>Dashboard</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>

            <p>📍 Bengaluru, India</p>
            <p>📞 +91-7093885812</p>
            <p>✉️ jagadeeshjade490@gmail.com</p>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Grand Hotel. All Rights Reserved.
        </p>

      </footer>
    );
  }

  export default Footer;