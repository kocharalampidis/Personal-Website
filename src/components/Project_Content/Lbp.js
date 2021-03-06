import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

var description =
	"Local binary patterns (LBP) is a type of visual descriptor used for classification in computer vision,\
					it has been found to be a powerful feature for texture classification. \
					LBP, also, improves the detection performance considerably on some datasets and\
					is being implemented in this project to classify 5 different species consisting of legumes and nuts.";

function Lbp() {
	return (
		<>
			<div class='w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3'>
				<div class='flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg'>
					<div class='flex-1'>
						<h2 class='text-gray-900 text-2xl font-bold leading-snug'>
							{"Local Binary Patterns"}
						</h2>
						<p class=' text-gray-600 text-sm  tracking-tighter'>
							{" Python - Computer Vision - Opencv"}
						</p>
						<p class='mt-2 text-lg'>{description}</p>
					</div>

					<a
						class='mt-6 w-full inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm'
						href='https://github.com/kocharalampidis/LBP'
						target='_blank'
						rel='noopener noreferrer'>
						<span class=''>{"Follow it on Github"} </span>
						<span class='ml-auto'>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default Lbp;
