import "./BookingCard.css";

function BookingCard({ room, cancelBooking }) {
  return (
    <div className="booking-card">
      <img src={room.image} alt={room.name} />

      <div className="booking-content">
        <h2>{room.name}</h2>

        <p>{room.category}</p>

        <h3>₹ {room.price}</h3>

        <button onClick={() => cancelBooking(room.id)}>
          Cancel Booking
        </button>
      </div>
    </div>
  );
}

export default BookingCard;