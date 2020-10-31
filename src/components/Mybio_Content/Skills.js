import React from "react";
// http://localhost:3000/

function Skills() {
	return (
		<>
			<thead class='text-white '>
				<tr class='bg-black'>
					<th class='p-3 text-left'>Skills</th>
					<th class='p-3 text-left'></th>
				</tr>
			</thead>
			<tbody class='bg-gray-100'>
				<tr class=''>
					<td class=' hover:bg-red-200 p-3 '>Python</td>
					<td class=' hover:bg-red-200 p-3 '></td>
				</tr>
				<tr class=''>
					<td class=' hover:bg-red-200 p-3 '>Java</td>
					<td class=' hover:bg-red-200 p-3 '></td>
				</tr>
				<tr class=''>
					<td class=' hover:bg-red-200 p-3 '>C++</td>
					<td class=' hover:bg-red-200 p-3 '></td>
				</tr>
			</tbody>
		</>
	);
}

export default Skills;
