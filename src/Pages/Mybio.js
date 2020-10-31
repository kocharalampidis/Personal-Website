import React, { Fragment } from "react";
import "../components/css/mybio.css";
import Education from "../components/Mybio_Content/Education";
import Work_Experience from "../components/Mybio_Content/Work_Experience";
import Skills from "../components/Mybio_Content/Skills";

function Mybio() {
	return (
		<Fragment>
			<body class='text-center flex items-center justify-center'>
				<div class='container'>
					<Education />
					<Work_Experience />
					<Skills />
				</div>
			</body>
		</Fragment>
	);
}

export default Mybio;
