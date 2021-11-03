import "styles/pages/home/Search.scss";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section className="search">
      <div className="search__country">
        <div className="search__icon-container">
          <FaSearch className="search__icon" />
        </div>
        <input type="search" name="countries" id="countries" placeholder="Search for a country..." />
      </div>
        <select className="search__region" name="region" id="region">
          <option disabled selected hidden>Filter by Region</option>
          <option value="europe">Europe</option>
          <option value="america">America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
        </select>      
    </section>
  )
}

export default Search
