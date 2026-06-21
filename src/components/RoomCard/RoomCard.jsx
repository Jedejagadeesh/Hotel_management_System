import "./RoomCard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HotelContext } from "../../context/HotelContext";

function RoomCard({ room }) {
  const { bookRoom, bookings } = useContext(HotelContext);
  const navigate = useNavigate();

  const isBooked = bookings.some((item) => item.id === room.id);

  const handleBooking = () => {
    if (isBooked) {
      alert("This room is already booked.");
      navigate("/booking");
      return;
    }

    bookRoom(room);
    navigate("/booking");
  };

  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} />

      <div className="room-info">
        <h2>{room.name}</h2>

        <p>{room.category}</p>

        <h3>₹ {room.price}</h3>

        <button onClick={handleBooking}>
          {isBooked ? "Booked" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default RoomCard;