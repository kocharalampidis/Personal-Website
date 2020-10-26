import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                Logo PH
            </p>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {(navbarOpen ? <FontAwesomeIcon icon={faWindowClose}/> : <FontAwesomeIcon icon={faBars}/>)}
            </button>
          </div>
          <div
            class={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
           <Navigation/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

{/* <nav class="bg-gray-800">
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
                    <div class={ 
                      "hidden sm:block sm:ml-6" +
              (navbarOpen ? " flex" : " hidden")
                                }>
                        <div class="flex">
                            <Navigation/>
                        </div>
                    </div>
            </div>
     </div>
class={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >

        
    </div>
</nav> */}