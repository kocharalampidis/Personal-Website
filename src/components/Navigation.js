import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div class=' lg:flex-grow'>
			<Link
				to='/'
				class=' font-bold block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md  leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Home
			</Link>

			<Link
				to='/Projects'
				class=' font-bold block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Projects
			</Link>
			<Link
				to='/Specializations'
				class='font-bold block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md  leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Specializations
			</Link>

			<Link
				to='/Profile'
				class='font-bold block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md  leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Profile
			</Link>
		</div>
	);
}
export default Navigation;
