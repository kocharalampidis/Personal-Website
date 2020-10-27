import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDraftingCompass,
	faRulerCombined,
	faHardHat,
	faTools,
} from "@fortawesome/free-solid-svg-icons";

function Caldendar() {
	return (
		<div>
			<div class='mt-12 text-center flex items-center justify-center'>
				<h1 class='font-mono text-6xl font-black font'>Under Construction</h1>
			</div>
			<div class='mt-12 space-x-3  flex items-center justify-center'>
				<FontAwesomeIcon icon={faDraftingCompass} size='7x' />
				<FontAwesomeIcon icon={faRulerCombined} size='7x' />
				<FontAwesomeIcon icon={faHardHat} size='7x' />
				<FontAwesomeIcon icon={faTools} size='7x' />
			</div>
		</div>
	);
}

export default Caldendar;
