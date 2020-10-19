import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Navbar.css'

function Navbar(){
    return(
      <div>
      <div className="font-bold py-3">
          AppName
      </div>
      <ul>
          <li>
              <NavLink 
                  to="/" 
                  className="text-blue-500 py-3 border-t border-b block"
              >
                  Home
              </NavLink>
          </li>
          <li>
              <NavLink 
                  to="/mybio" 
                  className="text-blue-500 py-3 border-b block"
              >
                  CV
              </NavLink>
          </li>
          <li>
              <NavLink 
                  to="/calendar" 
                  className="text-blue-500 py-3 border-b block"
              >
                  CA
              </NavLink>
          </li>
      </ul>
  </div>
    
    );
        
}

export default Navbar;