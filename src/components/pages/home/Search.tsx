import "styles/pages/home/Search.scss";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section className="search">
      <div className="country">
        <div className="icon-container">
          <FaSearch className="icon" />
        </div>
        <input type="search" name="countries" id="countries" placeholder="Search for a country..." />
      </div>
      <div className="select-container">
        <select className="chevron" name="region" id="region"> 
          <option disabled selected hidden>Filter by Region</option> 
          <option value="europe">Europe</option>
          <option value="america">America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
        </select>      
      </div>
    </section>
  )
}

export default Search
