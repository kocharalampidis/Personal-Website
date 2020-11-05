import React from "react";

import Applied_Data_Science_Sp from "../components/Specializations_Content/Applied_Data_Science_Sp";
import Deep_Learning_Sp from "../components/Specializations_Content/Deep_Learning_Sp";

function Specialization() {
	return (
		<>
			<div class='flex flex-wrap mt-2 mx-2 items-center justify-center'>
				<Deep_Learning_Sp />
				<Applied_Data_Science_Sp />
			</div>
		</>
	);
}

export default Specialization;
