import "styles/pages/home/Search.scss";
import CustomSelect from "./CustomSelect";
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
        <CustomSelect />   
      </div> 
    </section>
  )
}

export default Search
