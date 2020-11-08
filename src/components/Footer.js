import React from "react";

function Footer() {
	return (
		<footer class='bg-gray-800 absolute w-full bottom-0'>
			<div class=' pl-6'>
				<span class='text-white text-md font-semibold pr-4 border-r-2'>
					{" Made By Konstantinos Charalampidis "}
				</span>
				<span class='text-white text-md pl-4  '>
					{" "}
					&copy; {" Copywright 2020 "}
				</span>
			</div>
		</footer>
	);
}

export default Footer;
