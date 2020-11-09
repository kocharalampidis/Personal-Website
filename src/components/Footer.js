import React from "react";

function Footer() {
	return (
		<footer class=' footer bg-gray-900  w-full bottom-0 absolute pt-1'>
			<div class='container mx-auto  px-6'>
				<div class='pl-1 flex flex-col '>
					<div class='sm:w-2/3  py-1'>
						<p class='text-sm text-white font-bold'>
							{"© 2020 by Konstantinos Charalampidis"}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

{
	/* <footer class='bg-gray-800 absolute w-full bottom-0'>
<div class='container pl-6'>
	<span class=' text-white text-md font-semibold pr-4 border-r-2'>
		{" Made By Konstantinos Charalampidis "}
	</span>
	<div>
		<span class=' text-white text-md pl-4  '>
			{" "}
			&copy; {" Copywright 2020 "}
		</span>
	</div>
</div>
</footer> */
}
