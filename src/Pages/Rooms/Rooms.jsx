import Navbar from "../../components/Navbar/Navbar";
import FilterBar from "../../components/FilterBar/FilterBar";
import RoomList from "../../components/RoomList/RoomList";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";
import "../Rooms/Rooms.css"
function Rooms() {
  return (
    <>
      <Navbar />
      <FilterBar />
      <RoomList />
      <Pagination />
      <Footer />
    </>
  );
}

export default Rooms;