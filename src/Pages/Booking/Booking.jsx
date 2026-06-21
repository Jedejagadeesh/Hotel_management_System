import "./Booking.css";
import { useContext } from "react";
import { HotelContext } from "../../context/HotelContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookingCard from "../../components/BookingCard/BookingCard";
import BookingSummary from "../../components/BookingSummary/BookingSummary";

function Booking() {
  const { bookings, cancelBooking } = useContext(HotelContext);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="booking-page">

        <h1>My Bookings</h1>

        {bookings.length === 0 ? (

          <div className="empty-booking">

            <div className="empty-icon">🏨</div>

            <h2>No Rooms Booked Yet</h2>

            <p>
              You haven't booked any rooms yet.
              Explore our luxury rooms and enjoy
              a comfortable stay with Grand Hotel.
            </p>

            <button onClick={() => navigate("/rooms")}>
              Browse Rooms
            </button>

          </div>

        ) : (

          <>
            <div className="booking-grid">

              {bookings.map((room) => (

                <BookingCard
                  key={room.id}
                  room={room}
                  cancelBooking={cancelBooking}
                />

              ))}

            </div>

            <BookingSummary />

          </>

        )}

      </div>

      <Footer />
    </>
  );
}

export default Booking;