import "./BookingSuccess.css";
import { useNavigate } from "react-router-dom";

function BookingSuccess() {
  const navigate = useNavigate();

  const bookingId = "GH" + Math.floor(Math.random() * 100000);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Booking Confirmed!</h1>

        <p>
          Thank you for choosing <strong>Grand Hotel</strong>.
        </p>

        <h3>Booking ID</h3>

        <span>{bookingId}</span>

        <button onClick={() => navigate("/")}>
          Go To Home
        </button>
      </div>
    </div>
  );
}

export default BookingSuccess;