import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const description =
	"Web scraping is the process of gathering information from the Internet,\
	 respectfully for educational purposes.' \
	In this project it is an \
	automated web scraper, fetchig laptop prices from Wallmart.";

function Web_Scraping() {
	return (
		<>
			<div class='w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3'>
				<div class='flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg'>
					<div class='flex-1'>
						<h2 class='text-gray-900 text-2xl font-bold leading-snug'>
							{"Web Scraping"}
						</h2>
						<p class='text-gray-600 text-sm  tracking-tighter'>
							{"Python - Beautiful Soup"}
						</p>
						<p class='mt-2 text-lg'>{description}</p>
					</div>
					<a
						href='https://github.com/kocharalampidis/Web-Scraping'
						target='_blank'
						rel='noopener noreferrer'
						class='mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm'>
						<span>Follow it on Github </span>
						<FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
				</div>
			</div>
		</>
	);
}

export default Web_Scraping;

{
	/* <div class='bg-black bg-opacity-75 md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64 rounded'>
				<span>img</span>
				<div class='my-2 w-full md:w-2/3  px-4 py-4 bg-white rounded-lg'>
					<div class='flex items-center'>
						<h2 class='text-xl text-gray-800 font-medium mr-auto'>
							Web Scraping
						</h2>
						<p class='text-gray-600 text-sm  tracking-tighter'>
							Python - Beautiful Soup
						</p>
					</div>
					<p class='text-sm text-gray-700 mt-4'>{description}</p>
					<div class='flex items-center justify-end mt-4 top-auto'>
						<button class=' bg-blue-600 text-gray-200 px-2 py-2 rounded-md'>
							<a
								class=''
								href='https://github.com/kocharalampidis/Web-Scraping'
								target='_blank'
								rel='noopener noreferrer'>
								<span>Follow it on Github </span>
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</a>
						</button>
					</div>
				</div>
			</div> */
}
