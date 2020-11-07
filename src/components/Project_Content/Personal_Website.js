import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

var description =
	"This is my personal website, i am using it as my online portfolio.";

function Personal_Website() {
	return (
		<>
			<div class='w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3'>
				<div class='flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg'>
					<div class='flex-1'>
						<h2 class='text-gray-900 text-2xl font-bold leading-snug'>
							{"Personal Website"}
						</h2>
						<p class='text-gray-600 text-sm  tracking-tighter'>
							{"React, Javascript Library"}
						</p>
						<p class='mt-2 text-lg'>{description}</p>
					</div>
					<a
						class='mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm'
						href='https://github.com/kocharalampidis/LBP'
						target='_blank'
						rel='noopener noreferrer'>
						<span>{"Follow it on Github"} </span>
						<span class='ml-auto'>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default Personal_Website;
