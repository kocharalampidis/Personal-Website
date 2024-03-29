import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Upcoming_Projects() {
  return (
    <>
      <body class=" h-screen overflow-hidden flex items-center justify-center border-dashed border-4 border-white border-opacity-50 mx-2">
        <div class="lg:flex shadow  bg-green-600 ">
          <div class="lg:w-2/12 py-4 block h-full">
            <div class=""></div>
          </div>
          <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
            <div class="flex flex-row lg:justify-start justify-center">
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                {"Developed in: NextJS, Supabase"}
              </div>
            </div>
            <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
              {"Stock & Cryptocurrency Tracker"}
            </div>

            <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
              {"Basic Price And News Tracker, Personal Assistant"}
            </div>
          </div>
          <div class="flex flex-row items-center w-full lg:w-1/3 bg-white  lg:justify-end justify-center px-2 py-4 lg:px-0">
            <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
              {"Working on APIs integration"}
            </span>
          </div>
        </div>
      </body>
    </>
  );
}

export default Upcoming_Projects;
