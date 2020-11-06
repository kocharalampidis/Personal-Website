import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

import Navigation from "./Navigation";
import { Link } from "react-router-dom";

import { useState } from "react";
// import { Link } from "gatsby";

const Navbar = ({}) => {
	const [isExpanded, toggleExpansion] = useState(false);
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<nav className='sticky top-0 border-b-4 border-white flex  items-center justify-between flex-wrap bg-gray-800 px-2 py-3 mb-3'>
			<div className='container px-8 mx-auto flex flex-wrap items-center justify-between'>
				<div className='flex items-center flex-shrink-0 text-white mr-6'>
					<Link
						to='/'
						class='text-sm font-bold leading-relaxed  mr-4 py-2  text-white'>
						LOGO PH
					</Link>
				</div>
				<div className='block lg:hidden'>
					<button
						class=' hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out
							text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}>
						{navbarOpen ? (
							<FontAwesomeIcon icon={faWindowMinimize} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</button>
				</div>
				<div
					className={`${
						navbarOpen ? `block` : `hidden`
					} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
					<Navigation />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

{
	/*
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	<nav className='border-b-8 border-white relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800  mb-3'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link
							to='/'
							class='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'>
							Logo PH
						</Link>
						<button
							class=' hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out
							text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}>
							{navbarOpen ? (
								<FontAwesomeIcon icon={faWindowMinimize} />
							) : (
								<FontAwesomeIcon icon={faBars} />
							)}
						</button>
					</div>
					<div
						class={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}>
						<Navigation />
					</div>
				</div>
			</nav> */
}

/* 

import React, { useState } from 'react'
import {Link} from "gatsby"


const Navigation = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <h2>Kangu</h2>

  </div>
  <div className="block lg:hidden">
    <button
    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
    onClick={() => toggleExpansion(!isExpanded)}
    >
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
  )
}

export default Navigation


*/
