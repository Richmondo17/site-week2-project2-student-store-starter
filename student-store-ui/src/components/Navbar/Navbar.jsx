import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="content">

        <Logo logo = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/>

        {/* <div className="socials">
          <ul>
            <li id="soc"><a href=""></a></li>
            <li id="soc"><a href=""></a></li>
            <li id="soc"><a href=""></a></li>
          </ul>
        </div> */}
        <br></br>

        <div className="links">
          <ul>
            <li id="link"><a href="">Home</a></li>
            <li id="link"><a href="">About Us</a></li>
            <li id="link"><a href="">Contact Us</a></li>
            <li id="link"><a href="">Buy Now</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
