import React from "react";
import dl1 from "./images/dl1.png";
import dl2 from "./images/dl2.png";
import dl3 from "./images/dl3.png";
import dl4 from "./images/dl4.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DL_Certs() {
	return (
		<>
			<div class=' text-white  ml-6 '>
				<Link to='/Specializations' class=' focus:bg-blue-700'>
					<FontAwesomeIcon
						icon={faArrowLeft}
						color='rgb( 3, 47, 94 )'
						size='2x'
					/>
				</Link>
			</div>
			<div class='flex flex-wrap mt-2 mx-2 items-center justify-center'>
				<div class='w-full md:w-1/2 lg:w-2/5 px-2 my-2'>
					<div class='shadow-lg bg-white'>
						<img src={dl1} alt='logo' />
					</div>
					<div class='shadow-lg bg-white'>
						<img src={dl3} alt='logo' />
					</div>
				</div>
				<div class='w-full md:w-1/2 lg:w-2/5 px-2 my-2'>
					<div class='shadow-lg bg-white'>
						<img src={dl2} alt='logo' />
					</div>
					<div class='shadow-lg bg-white'>
						<img src={dl4} alt='logo' />
					</div>
				</div>
			</div>
		</>
	);
}

export default DL_Certs;
