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
