import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Navbar.css'

function Navbar(){
    return(
        <header className="main-navigation">
        <div className="main-navigation__logo">
          <h1>My Happy Place</h1>
        </div>
        <nav className="main-navigation__items">
          <ul>
            <li>
              <NavLink to="/welcome">Welcome</NavLink>
            </li>
            <li>
              <NavLink to="/mybio">CV</NavLink>
            </li>
            <li>
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    
    );
        
}

export default Navbar;