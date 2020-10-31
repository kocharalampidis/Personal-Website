import React, { Fragment } from "react";
// http://localhost:3000/

function Education() {
	return (
		<>
			<thead class='text-white'>
				<tr class='bg-black '>
					<th class='p-3 text-left'>Education</th>
					<th class='p-3 text-left'>Timeline</th>
				</tr>
			</thead>
			<tbody class='bg-gray-100'>
				<tr class=''>
					<td class=' hover:bg-red-200 p-3  '>
						Computer Science Department of the International Hellenic Univrsity,
						Software Engineer
					</td>
					<td class=' hover:bg-red-200 p-3 '>09/2013 - Today</td>
				</tr>
			</tbody>
		</>
	);
}

export default Education;
