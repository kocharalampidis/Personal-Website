import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div class=' lg:flex-grow'>
			<Link
				to='/'
				class='font-bold block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md  leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Home
			</Link>

			<Link
				to='/Projects'
				class='font-bold block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
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

{
	/* <div className='text-sm lg:flex-grow'>
					<a
						href='#responsive-header'
						className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
						Docs
					</a>
					<a
						href='#responsive-header'
						className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
						Examples
					</a>
					<a
						href='#responsive-header'
						className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
						Blog
					</a>
				</div> */
}

{
	/* <div class=''>
			<ul class='list-reset md:flex sm:flex'>
				<li class='mr-6'>
					<Link
						to='/'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Home
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Projects'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Projects
					</Link>
				</li>

				<li class='mr-6'>
					<Link
						to='/Specializations'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Specializations
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Profile'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Profile
					</Link>
				</li>
			</ul>
		</div> */
}
