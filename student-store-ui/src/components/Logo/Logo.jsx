import React from 'react'
import './Logo.css'

const Logo = (props) => {
  return (
    <div className = "cpLogo"> 
      <a href="/"><img src={props.logo} alt="codepath logo"/></a>
    </div>
   
  )
}

export default Logo