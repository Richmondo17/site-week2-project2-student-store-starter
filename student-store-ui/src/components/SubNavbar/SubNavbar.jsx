import React from 'react'
import { Link } from 'react-router-dom';
import "./SubNavbar.css"


const SubNavbar = ({ categories, onSelectCategory }) => {
  
  return (
    <div className='subnavbar'>
      {categories.map((category) => (
        <Link
          key={category}
          to="#"
          onClick={() => onSelectCategory(category)}
          className="subnavbar-link"
        >
          {category}
        </Link>
      ))}
    </div>
  )
  }

  export default SubNavbar
