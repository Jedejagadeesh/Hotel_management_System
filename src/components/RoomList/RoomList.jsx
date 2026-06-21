import "./RoomList.css";
import { useContext, useMemo } from "react";
import { HotelContext } from "../../context/HotelContext";
import RoomCard from "../RoomCard/RoomCard";

function RoomList() {
  const { rooms, search, category } = useContext(HotelContext);

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesSearch = room.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || room.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [rooms, search, category]);

  return (
    <div className="room-list">
      {filteredRooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default RoomList;