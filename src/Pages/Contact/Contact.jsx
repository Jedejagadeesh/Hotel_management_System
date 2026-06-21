import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">

        <div className="contact-card">

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

          <div className="contact-details">

            <h2>Contact Information</h2>

            <p>📧 jagadeeshjade490@gmail.com</p>

            <p>📞 +91-7093885812</p>

            <p>📍 Bengaluru, Karnataka</p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;