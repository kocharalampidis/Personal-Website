import React from 'react'
import { NavLink } from 'react-router-dom'



function Navigation(){
    return(
        <div class="hidden sm:block sm:ml-6">
            <ul  class="list-reset md:flex sm:flex">
                <li class="mr-6">
                    <NavLink 
                        to="/" 
                        class =""
                    >
                        Home
                    </NavLink>
                </li>
                <li class="mr-6">
                    <NavLink 
                        to="/mybio" 
                        class =""
                    >
                        CV
                    </NavLink>
                </li>
                <li class="mr-6">
                    <NavLink 
                        to="/calendar" 
                        class=""
                    >
                        Calendar
                    </NavLink>
                </li>
            </ul>
        </div>
    );
        
}

export default Navigation;
