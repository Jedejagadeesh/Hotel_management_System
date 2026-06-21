import { createContext, useEffect, useState } from "react";
import roomsData from "../data/rooms";

export const HotelContext = createContext();

function HotelProvider({ children }) {
  // Rooms
  const [rooms] = useState(roomsData);

  // Bookings
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  // Search
  const [search, setSearch] = useState("");

  // Category
  const [category, setCategory] = useState("All");

  // Save bookings
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // Book Room
  const bookRoom = (room) => {
    const exists = bookings.some((item) => item.id === room.id);

    if (exists) {
      alert("Room already booked!");
      return;
    }

    setBookings((prev) => [...prev, room]);
  };

  // Cancel Booking
  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.filter((room) => room.id !== id)
    );
  };

  // Dashboard Data
  const totalRooms = rooms.length;

  const bookedRooms = bookings.length;

  const availableRooms = totalRooms - bookedRooms;

  const totalRevenue = bookings.reduce(
    (total, room) => total + room.price,
    0
  );

  return (
    <HotelContext.Provider
      value={{
        rooms,

        bookings,
        setBookings, // ✅ IMPORTANT

        search,
        setSearch,

        category,
        setCategory,

        bookRoom,
        cancelBooking,

        totalRooms,
        bookedRooms,
        availableRooms,
        totalRevenue,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default HotelProvider;