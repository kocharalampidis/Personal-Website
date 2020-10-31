import React, { Fragment } from "react";
import "../css/mybio.css";
// http://localhost:3000/

function Education() {
	return (
		<Fragment>
			<table class='rounded-lg overflow-hidden shadow-lg max-w-sm sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-2xl my-5'>
				<thead class='text-white'>
					<tr class='bg-black'>
						<th class='p-3 text-left'>Education</th>
						<th class='p-3 text-left'>Timeline</th>
					</tr>
				</thead>
				<tbody class='bg-gray-100'>
					<tr class=''>
						<td class='border-green-600 border hover:bg-red-200 p-3  '>
							Computer Science Department of the International Hellenic
							Univrsity, Software Engineer
						</td>
						<td class='border-green-600 border hover:bg-red-200 p-3 '>
							09/2013 - Today
						</td>
					</tr>
				</tbody>
			</table>
		</Fragment>
	);
}

export default Education;
