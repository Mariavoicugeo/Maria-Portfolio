import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaSass,
  FaDatabase,
} from "react-icons/fa";
import LogoTailwind from "../../../public/img/tailwind.svg"
export default function Skills() {
  return (
    <div className='w-[70%] relative pb-20'>
          {/*Html*/}
          <div className="flex justify-between mb-1 items-center ">
        <span>
          <FaHtml5 size={50} className="text-[#4A4A4A]" />
        </span>
        <span class="text-sm font-medium text-[gray] dark:text-white">90%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[90%]"></div>
      </div>

         {/*CSS*/}

         <div className="flex justify-between mb-1 items-center ">
        <span>
          <FaCss3Alt size={50} className="text-[#4A4A4A]" />
        </span>
        <span className="text-sm font-medium text-[gray] dark:text-white">85%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[85%]"></div>
      </div>


            {/*Scss*/}

         <div className="flex justify-between mb-1 items-center ">
        <span>
          <FaSass size={50} className="text-[#4A4A4A]" />
        </span>
        <span class="text-sm font-medium text-[gray] dark:text-white">85%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[85%]"></div>
      </div>

  {/*Javascript*/}

  <div className="flex justify-between mb-1 items-center ">
        <span>
          <FaJsSquare size={50} className="text-[#4A4A4A]" />
        </span>
        <span class="text-sm font-medium text-[gray] dark:text-white">70%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[70%]"></div>
      </div>

  {/*sql*/}

  <div className="flex justify-between mb-1 items-center ">
        <span>
          < FaDatabase size={50} className="text-[#4A4A4A]" />
        </span>
        <span class="text-sm font-medium text-[gray] dark:text-white">65%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[65%]"></div>
      </div>
  {/*react*/}

  <div className="flex justify-between mb-1 items-center ">
        <span>
          <FaReact size={50} className="text-[#4A4A4A]" />
        </span>
        <span class="text-sm font-medium text-[gray] dark:text-white">75%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[75%]"></div>
      </div>

  {/*Tailwind*/}

  <div className="flex justify-between mb-1 items-center ">
        <span>
        <img src={LogoTailwind} alt="" className="w-[50px] h-[50px]"/>
        </span>
        <span class="text-sm font-medium text-[gray] dark:text-white">60%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[gray] h-2.5 rounded-full w-[60%]"></div>
      </div>





         
    </div>
  )
}
