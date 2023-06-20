import React from 'react'
import "./About.css"

const About = () => {
  return (
    <><div className='aboutHeader' id="aboutUs">About Us</div>
    <div class="summary">
          <div class="aboutText">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div class="aboutMedia">
              <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="codepath large" />
          </div>

      </div></>

  )
}

export default About