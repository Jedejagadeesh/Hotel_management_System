import "./BookingSummary.css";
import { useContext } from "react";
import { HotelContext } from "../../context/HotelContext";
import { useNavigate } from "react-router-dom";

function BookingSummary() {
  const { bookings, totalRevenue, setBookings } =
    useContext(HotelContext);

  const navigate = useNavigate();

  const gst = Math.round(totalRevenue * 0.18);
  const grandTotal = totalRevenue + gst;

  const confirmBooking = () => {
    if (bookings.length === 0) {
      alert("Please book at least one room.");
      return;
    }

    // Generate Booking ID
    const bookingId =
      "GH" +
      Math.floor(100000 + Math.random() * 900000);

    // Save booking details for success page
    localStorage.setItem(
      "bookingDetails",
      JSON.stringify({
        bookingId,
        rooms: bookings,
        totalRooms: bookings.length,
        totalPrice: totalRevenue,
        gst,
        grandTotal,
      })
    );

    // Clear current bookings
    setBookings([]);

    // Navigate to success page
    navigate("/booking-success");
  };

  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>

      <p>
        <span>Total Rooms</span>
        <strong>{bookings.length}</strong>
      </p>

      <p>
        <span>Total Price</span>
        <strong>₹ {totalRevenue}</strong>
      </p>

      <p>
        <span>GST (18%)</span>
        <strong>₹ {gst}</strong>
      </p>

      <hr />

      <h3>
        <span>Grand Total</span>
        <span>₹ {grandTotal}</span>
      </h3>

      <button onClick={confirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingSummary;