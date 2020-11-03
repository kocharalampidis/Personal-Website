import React from "react";
import Lbp from "../components/Project_Content/Lbp";
import Predictive_Maintenance from "../components/Project_Content/Predictive_Maintenance";
import Upcoming_Projects from "../components/Project_Content/Upcoming_Projects";

function Projects() {
	return (
		<>
			<div class='flex items-center justify-center font-medium text-4xl px-2'>
				Theses Are The Projects that I have completed over the Years
			</div>
			<Lbp />
			<Predictive_Maintenance />

			<div class='flex items-center justify-center font-medium text-4xl px-2'>
				Upcoming Projects
			</div>
			<Upcoming_Projects />
		</>
	);
}

export default Projects;

{
	/*<>
			<div class='bg-black bg-opacity-75 md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64 rounded'>
				<span>img</span>
				<div class='my-2 w-full md:w-2/3  px-4 py-4 bg-white rounded-lg'>
					<div class='flex items-center'>
						<h2 class='text-xl text-gray-800 font-medium mr-auto'>
							LBP Exctractor
						</h2>
					</div>
					<p class='text-sm text-gray-700 mt-4'>
						Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam
						reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit
						earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis
						numquam tempore commodi ipsa suscipit laboriosam, sit earum at
						sequi.
					</p>
					<div class='flex items-center justify-end mt-4 top-auto'>
						<button class=' bg-blue-600 text-gray-200 px-2 py-2 rounded-md'>
							<a
								class=''
								href='https://github.com/kocharalampidis/LBP'
								target='_blank'
								rel='noopener noreferrer'>
								<span>Follow it on Github </span>
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</a>
						</button>
					</div>
				</div>
			</div>
		</> */
}
