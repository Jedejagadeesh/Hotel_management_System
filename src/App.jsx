import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import Booking from "./pages/Booking/Booking";
import Dashboard from "./pages/Dashboard/Dashboard";
import RoomDetails from "./pages/RoomDetails/RoomDetails";
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/room-details" element={<RoomDetails />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;