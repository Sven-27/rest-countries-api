import { useState } from 'react'
import "styles/pages/home/CustomSelect.scss"

const CustomSelect = () => {
  return (
    <div className="customSelect">
      <div className="dropdown-header">
        Filter by Region
      </div>
      <div className="dropdown-container">
        <ul className="dropdown-list">
          <li><a href="#">Europe</a></li>
          <li><a href="#">America</a></li>
          <li><a href="#">Africa</a></li>
          <li><a href="#">Asia</a></li>
          <li><a href="#">Oceania</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default CustomSelect
