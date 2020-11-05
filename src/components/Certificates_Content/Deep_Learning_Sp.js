import React from "react";
import DL_SP from "./images/Coursera_Specialization_DL-1.png";

function DeepLearningSp() {
	return (
		<>
			<div class='w-full md:w-1/2 lg:w-1/3 px-2 my-2'>
				<div class='shadow-lg bg-white'>
					<img class='' src={DL_SP} alt='logo' />
					<div class='flex flex-col p-4'>
						<p class='text-lg'>{"Specialization aquired from Coursera"}</p>
						<p class='text-gray-600'>{"Consisting of 4 more coursers"}</p>
						<button class='self-end mt-4'>{"Show more..."}</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default DeepLearningSp;

{
	/* <h1>2</h1>
			<img src={DL_SP} alt='logo' />;
			<img src={AD_SP} alt='logo' />; */
}
