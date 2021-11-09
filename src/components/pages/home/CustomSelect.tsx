import { useState } from "react";
import "styles/pages/home/CustomSelect.scss";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = () => {
  return (
    <div className="customSelect">
      <div className="dropdown-header">
        Filter by Region
        <FaChevronDown />
      </div>
      <div className="dropdown-container">
        <ul className="dropdown-list">
          <li className="list dk"><Link to="/" className="list-item">Europe</Link></li>
          <li className="list dk"><Link to="/" className="list-item">America</Link></li>
          <li className="list dk"><Link to="/" className="list-item">Africa</Link></li>
          <li className="list dk"><Link to="/" className="list-item">Asia</Link></li>
          <li className="list dk"><Link to="/" className="list-item">Oceania</Link></li>
        </ul>
      </div>
      
    </div>
  )
}

export default CustomSelect
