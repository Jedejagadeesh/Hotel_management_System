import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Footer from "../Footer/Footer.jsx";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🏨 Grand Hotel</h2>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" style={{fontSize:"25px", fontFamily:"Times New Roman', Times, serif",color:"white"}}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/rooms" style={{fontSize:"25px", fontFamily:"Times New Roman', Times, serif",color:"white"}}>Rooms</NavLink>
        </li>

        <li>
          <NavLink to="/booking" style={{fontSize:"25px", fontFamily:"Times New Roman', Times, serif",color:"white"}}>Bookings</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard" style={{fontSize:"25px", fontFamily:"Times New Roman', Times, serif",color:"white"}}>Dashboard</NavLink>
        </li>
      <li>
  <NavLink to="/contact" style={{fontSize:"25px", fontFamily:"Times New Roman', Times, serif",color:"white"}}>Contact</NavLink>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;