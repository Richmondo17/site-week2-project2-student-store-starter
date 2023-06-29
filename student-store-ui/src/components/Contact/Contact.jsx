// Importing the necessary CSS file
import "./Contact.css"

import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Contact header */}
      <div className="contactHeader">Contact Us</div>
      
      <div className="contactSummary">
        {/* Contact information */}
        <ul className="contactInfo" id="contactUs">
          {/* Email */}
          <li className='email'>
            <span className="label">Email:</span>
            <span>code@path.org</span>
          </li>
          
          {/* Phone */}
          <li className="phone">
            <span className="label">Phone:</span>
            <span>1-800-CODEPATH</span>
          </li>
          
          {/* Address */}
          <li className="address">
            <span className="label">Address:</span>
            <span>123 Fake Street, San Francisco, CA</span>
          </li>
          
          {/* Socials */}
          <li>
            <span>Socials: </span>
            <span className="socials">
              {/* Social icons */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {/* SVG path for social icon */}
              </svg>
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                {/* SVG path for social icon */}
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                {/* SVG path for social icon */}
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {/* SVG path for social icon */}
              </svg>
            </span>
          </li>
        </ul>

        {/* Contact media */}
        <div className="contactMedia">
          <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="codepath large" height="300" />
        </div>

      </div>
    </>
  )
}

export default Contact
