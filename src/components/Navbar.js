import React from 'react'
import '../assets/nav.css'

function Navbar({active}) {
    return (
        <div>
            <nav id="navbar" className= {active ? "navbar-open" : null}>
              <ul className="menu-list">
                <li>
                  <a href="#" target="_blank">
                   Features
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Resources
                  </a>
                </li>
              </ul>
            <div className="line"></div>
              <ul className="menu-list">
                <li>
                  <a href="#" target="_blank">
                    Login
                  </a>
                </li>
                <li id="signup-button">Sign Up</li>
              </ul>
          </nav>
        </div>
    )
}

export default Navbar
