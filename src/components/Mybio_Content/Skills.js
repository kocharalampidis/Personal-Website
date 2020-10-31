import React, { Fragment } from "react";
import "../css/mybio.css";
// http://localhost:3000/

function Skills() {
	return (
		<Fragment>
			<table class='rounded-lg overflow-hidden shadow-lg max-w-sm sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-2xl my-5'>
				<thead class='text-white'>
					<tr class='bg-black'>
						<th class='p-3 text-left'>Skills</th>
						<th class='p-3 text-left'>"-"</th>
					</tr>
				</thead>
				<tbody class='bg-gray-100'>
					<tr class=''>
						<td class='border-green-600 border hover:bg-red-200 p-3 '>
							Python
						</td>
						<td class='border-green-600 border hover:bg-red-200 p-3 '>
							Strong
						</td>
					</tr>
					<tr class=''>
						<td class='border-green-600  border hover:bg-red-200 p-3 '>Java</td>
						<td class='border-green-600 border hover:bg-red-200 p-3 '>
							Normal
						</td>
					</tr>
					<tr class=''>
						<td class='border-green-600 border hover:bg-red-200 p-3 '>C++</td>
						<td class='border-green-600 border hover:bg-red-200 p-3 '>
							Normal
						</td>
					</tr>
				</tbody>
			</table>
		</Fragment>
	);
}

export default Skills;
