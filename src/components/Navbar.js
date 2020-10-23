import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

function Navbar(){
    return(
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-12">
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"> 
                            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                                    <FontAwesomeIcon 
                                        icon={faBars}                        
                                    />
                                </button>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex">
                                    <Navigation/>
                                </div>
                            </div>
                    </div>
            </div>
            
            
                
        </div>
      </nav>
      
    
    );
        
}

export default Navbar;
