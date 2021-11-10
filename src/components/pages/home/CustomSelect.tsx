import { useState } from "react";
import "styles/pages/home/CustomSelect.scss";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="customSelect">
      <div className="dropdown-header" onClick={ toggling }>
        Filter by Region
        <FaChevronDown />
      </div>
      { isOpen && (
      <div className="dropdown-container">
        <ul className="dropdown-list">
          <li className="list"><Link to="/" className="list-item">Europe</Link></li>
          <li className="list"><Link to="/" className="list-item">America</Link></li>
          <li className="list"><Link to="/" className="list-item">Africa</Link></li>
          <li className="list"><Link to="/" className="list-item">Asia</Link></li>
          <li className="list"><Link to="/" className="list-item">Oceania</Link></li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default CustomSelect
