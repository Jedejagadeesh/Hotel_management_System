import "./FilterBar.css";
import { useContext } from "react";
import { HotelContext } from "../../context/HotelContext";

function FilterBar() {
  const { category, setCategory } = useContext(HotelContext);

  return (
    <div className="filter-bar">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Luxury</option>
        <option>Deluxe</option>
        <option>Standard</option>
      </select>
    </div>
  );
}

export default FilterBar;