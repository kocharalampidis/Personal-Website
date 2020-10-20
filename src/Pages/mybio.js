import React, { Fragment } from 'react';
import '../components/css/mybio.css'
// http://localhost:3000/



function mybio(){
    return (
    <Fragment>    
        <body class="flex items-center justify-center">
            <div class="container">
                <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                    <thead class="text-white">
                        <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left">Education</th>
                        </tr>
                       </thead>
                    <tbody class="flex-1 sm:flex-none">
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td class="border-grey-light border hover:bg-gray-100 p-3">Computer Science Department
                                of the International Hellenic University, Software Engineer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>

        <body class="flex items-center justify-center">
            <div class="container">
                <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                    <thead class="text-white">
                        <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left">Work experience</th>
                        </tr>
                       </thead>
                    <tbody class="flex-1 sm:flex-none">
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td class="border-grey-light border hover:bg-gray-100 p-3">Electrician Assistant, Prokat Kavalas</td>
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td class="border-grey-light border hover:bg-gray-100 p-3">Secretarial Support, Order and Warehouse Manager, 
                                        Nikolaos Manzouranis-Massage, Chiropractic and Alternative Therapies
                                </td>
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-100 p-3">Shift Manager, Tsalapeteinos Urban Farm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
            
    </Fragment>    
        
    );
}

export default mybio;