import React from "react";
import Lbp from "../components/Project_Content/Lbp";
import Predictive_Maintenance from "../components/Project_Content/Predictive_Maintenance";
import Upcoming_Projects from "../components/Project_Content/Upcoming_Projects";
import Web_Crawler from "../components/Project_Content/Web_Crawler";
import Personal_Website from "../components/Project_Content/Personal_Website";

function Projects() {
	return (
		<>
			<div class='flex items-center justify-center font-medium text-4xl px-2'>
				Theses Are The Projects that I have completed over the Years
			</div>
			<Personal_Website />
			<Lbp />
			<Predictive_Maintenance />
			<Web_Crawler />
			<div class='flex items-center justify-center font-medium text-4xl px-2'>
				Upcoming Projects
			</div>
			<Upcoming_Projects />
		</>
	);
}

export default Projects;
