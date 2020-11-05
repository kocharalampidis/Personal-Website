import React from "react";
import AD_SP from "./images/Coursera_Specialization_Applied_Data_Science.png";

function Applied_Data_Science_Sp() {
	return (
		<>
			<div class='w-full md:w-1/2 lg:w-1/3 px-2 my-2'>
				<div class='shadow-lg bg-white'>
					<img class='' src={AD_SP} alt='logo' />
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

export default Applied_Data_Science_Sp;

{
	/* <h1>2</h1>
			<img src={DL_SP} alt='logo' />;
			<img src={AD_SP} alt='logo' />; */
}
