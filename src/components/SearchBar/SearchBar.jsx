import "./SearchBar.css";
import { useContext } from "react";
import { HotelContext } from "../../context/HotelContext";

function SearchBar() {
  const { search, setSearch } = useContext(HotelContext);

  return (
    <div className="search-container">

      <h2>Find Your Perfect Room</h2>

      <p>Search rooms by name or category.</p>

      <div className="search-box">

        <input
          type="text"
          placeholder="🔍 Search rooms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;