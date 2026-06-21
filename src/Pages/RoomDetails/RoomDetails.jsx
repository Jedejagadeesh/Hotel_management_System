// import "./RoomDetails.css";
// import Navbar from "../../components/Navbar/Navbar";
// function RoomDetails() {
//   return (
//     <section className="room-details">

//       <div className="room-image">

//         <img
//           src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900"
//           alt="Luxury Room"
//         />

//       </div>

//       <div className="room-info">

//         <h1>Luxury Suite</h1>

//         <h2>₹ 5000 / Night</h2>

//         <p>
//           Experience a luxurious stay with modern interiors,
//           king-size bed, free Wi-Fi, air conditioning,
//           swimming pool access, complimentary breakfast,
//           and 24/7 room service.
//         </p>

//         <h3>Facilities</h3>

//         <ul>
//           <li>🛏 King Size Bed</li>
//           <li>📶 Free Wi-Fi</li>
//           <li>🍽 Free Breakfast</li>
//           <li>🏊 Swimming Pool</li>
//           <li>🚗 Free Parking</li>
//           <li>❄ Air Conditioning</li>
//         </ul>

//         <button>Book Now</button>

//       </div>

//     </section>
//   );
// }

// export default RoomDetails;
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function RoomDetails() {
  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "60px 8%",
          textAlign: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900"
          alt="Luxury Suite"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "12px",
          }}
        />

        <h1 style={{ marginTop: "25px" }}>
          Luxury Suite
        </h1>

        <h2>₹5000 / Night</h2>

        <p
          style={{
            margin: "20px auto",
            maxWidth: "700px",
            lineHeight: "1.8",
          }}
        >
          Luxury suite with king-size bed, Wi-Fi,
          swimming pool access, complimentary breakfast,
          and 24/7 room service.
        </p>

        <button
          style={{
            padding: "14px 30px",
            border: "none",
            borderRadius: "8px",
            background: "#1f2937",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </section>

      <Footer />
    </>
  );
}

export default RoomDetails;