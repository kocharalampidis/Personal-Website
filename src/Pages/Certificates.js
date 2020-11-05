import React from "react";

import Applied_Data_Science_Sp from "../components/Certificates_Content/Applied_Data_Science_Sp";
import Deep_Learning_Sp from "../components/Certificates_Content/Deep_Learning_Sp";

function Certificates() {
	return (
		<>
			<div class='flex flex-wrap mt-2 mx-2 items-center justify-center'>
				<Deep_Learning_Sp />
				<Applied_Data_Science_Sp />
			</div>
		</>
	);
}

export default Certificates;

{
	/* <h1>2</h1>
			<img src={DL_SP} alt='logo' />;
			<img src={AD_SP} alt='logo' />; 
			
			<div class='flex flex-wrap mt-2 mx-2 items-center justify-center'>
				<div class='w-full md:w-1/2 lg:w-1/3 px-2 my-2'>
					<div class='shadow-md bg-white'>
						<Deep_Learning_Sp />
						<Applied_Data_Science_Sp />
					</div>
				</div>
			</div>
			*/
}
