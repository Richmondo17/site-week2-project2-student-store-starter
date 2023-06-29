import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="content">

        <Logo logo = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/>

        <br></br>

        <div className="links">
          <ul className="navy">
            <li id="link">
              <a id ="home" href="#homePage">Home</a>
            </li>
            <li id="link">
              <a id="about" href="#aboutUs">About Us</a>
            </li>
            <li id="link">
              <a id ="contact" href="#contactUs">Contact Us</a>
            </li>
            <li id="link">
              <a id="buy" href="#bestSeller">Buy Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
