import React from "react";
import Lbp from "../components/Project_Content/Lbp";
import Predictive_Maintenance from "../components/Project_Content/Predictive_Maintenance";
import Upcoming_Projects from "../components/Project_Content/Upcoming_Projects";
import Web_Scraping from "../components/Project_Content/Web_Scraping";
import Personal_Website from "../components/Project_Content/Personal_Website";

function Projects() {
	return (
		<>
			<div class='max-w-screen-xl mx-auto px-4 mt-16 '>
				<div class='-mx-4 flex flex-wrap'>
					<Predictive_Maintenance />

					<Web_Scraping />

					<Lbp />

					<Personal_Website />
				</div>
			</div>

			<div class='mt-16 flex items-center justify-center font-medium text-4xl px-2'>
				{"Upcoming Projects"}
			</div>
			<Upcoming_Projects />
		</>
	);
}

export default Projects;
