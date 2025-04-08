import React from 'react';

const Timeline = () => {
  return (
   

<div classNameName='w-full flex justify-center  py-20 px-10'>
<ol className="items-start justify-center sm:flex">
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#0000009d] rounded-full ring-0 ring-white dark:bg-[black] sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-[#ffffff] dark:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path className='flex justify-center items-center' d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-[#a0a0a0] h-0.5 dark:bg-[#b3b3b3]"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">High School</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">09.2019-05.2023</time>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400"> Finished high school focused on math and tech, building strong logic skills.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#0000009d] rounded-full ring-0 ring-white dark:bg-[black] sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-[#ffffff] dark:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-[#a0a0a0] h-0.5 dark:bg-[#b3b3b3]"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">PixelLab</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">03.2024-09.2024</time>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Gained experience at PixelLab in design, teamwork, and development tools.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#0000009d] rounded-full ring-0 ring-white dark:bg-[black] sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-[#ffffff] dark:text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-[#a0a0a0] h-0.5 dark:bg-[#b3b3b3]"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Freelance</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024-Present</time>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400"> Began freelancing to create websites, grow skills, and work with clients.</p>
        </div>
    </li>
</ol>
</div>




  );
};

export default Timeline;
