import React, { Fragment } from "react";
import Education from "../components/Mybio_Content/Education";
import Work_Experience from "../components/Mybio_Content/Work_Experience";
import Skills from "../components/Mybio_Content/Skills";

function Mybio() {
	return (
		<Fragment>
			<body class=' sm:text-lg md:text-xl lg:text-xl xl:text-xl text-center flex items-center justify-center'>
				<div class='grid max-w-sm sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-2xl '>
					<table class='space-y-6 rounded-lg overflow-hidden my-5'>
						<Education />
						<div class='flex-no-wrap'></div>
						<Work_Experience />
						<div class='flex-no-wrap'></div>
						<Skills />
					</table>
				</div>
			</body>
		</Fragment>
	);
}

export default Mybio;
