import React from 'react'
import logo from "../../logo.svg"
import "./navbar.scss"

function NavBar() {
    return (
      <div>
        <nav className="navbar">
          <img src={logo} alt="city tour logo" />
          <ul className="nav-links">
            {/* <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>

            <li>
              <a href="/" className="nav-link">
                about
              </a>
            </li> */}
            <li>
              <a href="/" className="nav-link active">
                Tours
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default NavBar
