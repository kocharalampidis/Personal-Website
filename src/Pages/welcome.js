import { faTable } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment } from 'react';
import '../components/css/mybio.css'


function welcome(){
    return (
    <Fragment>    
      <body class="flex items-center justify-center">
            <div class="container">


                <table class="rounded-lg overflow-hidden shadow-lg max-w-sm sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-2xl my-5">
                    <thead class="text-white">
                        <tr class="bg-black">
                                <th class="p-3 text-left">Education</th>
                                <th class="p-3 text-left">Timeline</th>

                        </tr>
                       </thead>
                    <tbody class="">
                        <tr class="">
                                <td class="border-green-600 border hover:bg-red-200 p-3  ">
                                    Computer Science Department
                                    of the International Hellenic Univrsity, Software Engineer 
                                </td>
                                <td class="border-green-600 border hover:bg-red-200 p-3 "> 09/2013 - Σήμερα </td>


                        </tr>
                    </tbody>
                </table>

                
                <table class="rounded-lg overflow-hidden shadow-lg max-w-sm sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-2xl my-5">
                    <thead class="text-white">
                        <tr class="bg-black">
                                <th class="p-3 text-left">Work Experience</th>
                                <th class="p-3 text-left">Timeline</th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr class="">
                                <td class="border-green-600 border hover:bg-red-200 p-3 ">
                                   
                                    Electrician Assistant, Prokat Kavalas 

                                </td>
                                <td class="border-green-600 border hover:bg-red-200 p-3 ">
                                    
                                    03/2014 - 10/2014

                                </td>
                        </tr>
                        <tr class="">
                                <td class="border-green-600  border hover:bg-red-200 p-3 ">
                                    
                                    Order and Warehouse Manager, Nikolaos Manzouranis-Massage Chiropractic and Alternative Therapies

                                </td>
                                <td class="border-green-600 border hover:bg-red-200 p-3 ">
                                    11/2014 - 11/2015
                                 </td>
                        </tr>
                        <tr class="">
                                <td class="border-green-600 border hover:bg-red-200 p-3 ">
                                    
                                    Shift Manager, Tsalapeteinos Urban Farm

                                </td>
                                <td class="border-green-600 border hover:bg-red-200 p-3 ">
                                    12/2015 - 07/2017
                                </td>

                        </tr>
                    </tbody>
                </table>
            
            </div>
        </body>
            
    </Fragment>    
        
    );
}

export default welcome;

// table  
 
// thead 
// th  
// td  
// tr  
// tbody 

{/* <body class="flex items-center justify-center">
<div class="container">
    <table class=" flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead class="text-white">
            <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="p-3 text-left">Education</th>
                    <th class="p-3 text-left">Timeline</th>

            </tr>
           </thead>
        <tbody class="flex-1 sm:flex-none">
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td class="border-grey-light border hover:bg-gray-100 p-3 ">Computer Science Department
                    of the International Hellenic University, Software Engineer 
                    </td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 "> 09/2013 - Σήμερα </td>


            </tr>
        </tbody>
    </table>
</div>
</body> */}