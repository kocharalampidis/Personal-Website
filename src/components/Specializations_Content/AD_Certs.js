import React from "react";
import ads1 from "./images/ads1.png";
import ff from "./images/ff.png";
import mf from "./images/mf.png";
import df from "./images/df.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function AD_Certs() {
	return (
		<>
			<div class=' text-white  ml-6 '>
				<Link to='/Specialization' class=' focus:bg-blue-700'>
					<FontAwesomeIcon
						icon={faArrowLeft}
						color='rgb( 3, 47, 94 )'
						size='2x'
					/>
				</Link>
			</div>
			<div class='flex flex-wrap mt-2 mx-2 items-center justify-center'>
				<div class='w-full md:w-1/2 lg:w-1/3 px-2 my-2'>
					<div class='shadow-lg bg-white'>
						<img src={ads1} alt='logo' />
					</div>
					<div class='shadow-lg bg-white'>
						<img src={ff} alt='logo' />
					</div>
				</div>
				<div class='w-full md:w-1/2 lg:w-1/3 px-2 my-2'>
					<div class='shadow-lg bg-white'>
						<img src={mf} alt='logo' />
					</div>
					<div class='shadow-lg bg-white'>
						<img src={df} alt='logo' />
					</div>
				</div>
			</div>
		</>
	);
}

export default AD_Certs;
