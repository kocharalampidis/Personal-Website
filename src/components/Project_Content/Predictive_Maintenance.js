import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

var description =
	"A strategy to perform maintenance based on the estimated health of the piece of equipment, by collecting data from specific sensors.\
	 Through Predictive maintenance, a manufacturer can reduce the cost of maintenance activities, and avoid challenging damages\
	  by being intelligently proactive and performing maintenance at the right time. In this project i performed Predictive Maintenanace\
	  on an acquired dataset from  NASA";

function Predictive_Maintenanace() {
	return (
		<>
			<div class='w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3'>
				<div class='flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg'>
					<div class='flex-1'>
						<h2 class='text-gray-900 text-2xl font-bold leading-snug'>
							{"Predictive Maintenance"}
						</h2>
						<p class='text-gray-600 text-sm  tracking-tighter'>
							{"Python - Machine Learning"}
						</p>
						<p class='mt-2 text-lg'>{description}</p>
					</div>
					<a
						href='https://github.com/kocharalampidis/Predictive_Maintenance/tree/Four_Model_Solution'
						target='_blank'
						rel='noopener noreferrer'
						class='mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm'>
						<span class=''>Follow it on Github </span>
						<span class='ml-auto'>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default Predictive_Maintenanace;
