import { useState } from "react";
import "./MainNavBar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f0f0f0]">
      {/* Button to toggle the sidebar */}
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* Button to close sidebar, visible only on small devices */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full md:hidden "
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 111.414 1.414L11.414 9l4.293 4.293a1 1 0 11-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 9 4.293 4.707a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>

      
            <a href="" className="flex items-center ps-2.5 ">
              <h3 className="fontlogo fontlogo text-6xl">MV</h3>
            </a>
          
          <ul className="space-y-3 font-medium flex flex-col justify-end h-[90%]">
            <li>
              <Link to="/about">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3 fontlogo text-5xl">About Me</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/proiecte">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3 fontlogo text-5xl">Services</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="fontlogo ms-3 text-5xl">Contact Me</span>
                </a>
              </Link>
            </li>
            {/* Add other items here */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

/*import React from "react";
import TextPressure from "../../reactBits/TextPressure";

export default function MainNavBar() {
  
  return (
    
    <nav class="bg-[#8b8b8b] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-[#2222226e] dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h4 className="w-full text-md font-bold">
            <TextPressure
              text="Voicu&nbsp;Maria"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={true}
              textColor="white"
              minFontSize={60}
            />
          </h4>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="transform  flex justify-center items-center transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-105 cursor-pointer">
          
            <p className="lora text-2xl text-center text-white">Let's Talk</p>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="font-medium flex justify-center items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-3">
            <li className=" transform transition-all duration-500 ease-in-out hover:-rotate-12 hover:scale-105 cursor-pointer">
             
              <p className="lora text-2xl  text-center text-white" >About</p>
            </li>

            <li className="transform transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-105 cursor-pointer">
              
              <p className="lora text-2xl  text-center text-white">Skills</p>
            </li>
            <li className="transform transition-all duration-500 ease-in-out hover:-rotate-12 hover:scale-105 cursor-pointer">
            
              <p className="lora text-2xl  text-center text-white">Projects</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}*/
