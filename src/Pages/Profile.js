import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedinIn,
	faSkype,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Profile() {
	return (
		<>
			<body class='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover'>
				<div class='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0'>
					<div
						id='profile'
						class='w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  mx-6 lg:mx-0'>
						<div class='p-4 md:p-12 text-center lg:text-left'>
							<div class='block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center'>
								<img src='https://icons.iconarchive.com/icons/icojam/matreshka/512/red-matreshka-inside-icon-icon.png'></img>
							</div>

							<h1 class='border-blue-700 border-b-2 text-3xl font-bold pt-8 lg:pt-0  lg:mx-0 w-3/3'>
								{"Konstantinos Charalampidis"}
							</h1>
							{/* <div class='mx-auto lg:mx-0 w-2/3 pt-3 border-b-2 border-blue-700 opacity-50'></div> */}
							<p class=' pt-4 mt-2 text-base font-bold flex items-center justify-center lg:justify-start'>
								<svg
									class='h-4 fill-current pr-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z' />
								</svg>
								{" Currently Freelancing"}
							</p>
							<p class='pt-2 text-gray-700 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
								<svg
									class='h-4 fill-current text-gray-700 pr-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
								</svg>
								{"Kavala, Greece "}
							</p>
							<p class='pt-8 font-bold'>{"Gmail: kocharalampidis@gmail.com"}</p>

							<div class='pt-12 pb-8'>
								<button class='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full'>
									{"Get In Touch"}
								</button>
							</div>

							<div class='mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between'>
								<a
									class='py-1 px-2 rounded-full border-b-4  hover:border-blue-900 '
									href='https://www.linkedin.com/in/konstantinos-charalampidis-45b6ba1b3/'
									alt='LinkedIn_handle'
									target='_blank'>
									<FontAwesomeIcon
										icon={faLinkedinIn}
										size='2x'
										color=' #000000 '
									/>
								</a>
								<a
									class='py-1 px-2 rounded-full border-b-4  hover:border-blue-900'
									href='https://github.com/kocharalampidis'
									alt='@Github_handle'>
									<FontAwesomeIcon
										icon={faGithub}
										size='2x'
										color=' #000000 '
									/>
								</a>
								<a
									href='skype:live:.cid.f0119bb0fa262427?chat'
									class='py-1 px-2 rounded-full border-b-4  hover:border-blue-900 '
									alt='@Skype_handle'
									target='_blank'>
									<FontAwesomeIcon icon={faSkype} size='2x' color=' #000000 ' />
								</a>
							</div>
						</div>
					</div>

					<div class='w-full lg:w-2/5'>
						<img
							src='https://icons.iconarchive.com/icons/icojam/matreshka/256/red-matreshka-inside-icon-icon.png'
							class='rounded-none lg:rounded-lg shadow-2xl hidden lg:block'></img>
					</div>
				</div>
			</body>
		</>
	);
}

export default Profile;
