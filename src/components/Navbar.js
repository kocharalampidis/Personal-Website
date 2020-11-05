import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
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
			</nav>
		</>
	);
}

export default Navbar;
