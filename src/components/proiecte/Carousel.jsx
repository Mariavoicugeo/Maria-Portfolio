import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import EComm from "../../../public/img/e-com.png";
import LawnCare from "../../../public/img/Lawn-care.png";
import MiniGame from "../../../public/img/Mini-Game.png"; // Example image
import ToDO from "../../../public/img/To-Do-app.png";
import Weather from "../../../public/img/weather.png"
import Landing from "../../../public/img/landing.png"
import "./Carousel.css"
const projects = [
  {
    id: 1,
    title: "Weather",
    subtitle: "Now",
    date: "September, 2024",
    description:
      "An interactive weather app that displays current conditions and forecasts based on an external API. Built with JavaScript.",
    image: Weather,
    link: "https://mariavoicugeo.github.io/Weather-app/",
  },
  {
    id: 2,
    title: "Shop",
    subtitle: "Now",
    date: "October, 2024",
    description:
      "A dynamic shopping website where users can explore products, view item details, and add them to the cart. Built with JavaScript.",
    image: EComm,
    link: "https://mariavoicugeo.github.io/Timeless-Treasures/",
  },
  {
    id: 3,
    title: "LawnCare",
    subtitle: "Estimator",
    date: "October, 2024",
    description:
      "An intuitive quote generator that provides instant price estimates for lawn care services. Created using JavaScript.",
    image: LawnCare,
    link: "https://mariavoicugeo.github.io/LawnCare/#home",
  },
  {
    id: 4,
    title: "To-Do",
    subtitle: "Tasks",
    date: "January, 2025",
    description:
      "A productivity app that helps users manage their tasks with add, edit, and delete options. Built with React.",
    image: ToDO,
    link: "https://mariavoicugeo.github.io/todo-app/",
  },
  {
    id: 5,
    title: "Landing",
    subtitle: "Modern",
    date: "February, 2025",
    description:
      "A clean, responsive landing page with modern design principles and mobile-first styling. Made with HTML & CSS.",
    image: Landing,
    link: "https://mariavoicugeo.github.io/Landing-Page/",
  },
  {
    id: 6,
    title: "Memory",
    subtitle: "Flip",
    date: "January, 2025",
    description:
      "A classic memory card game where users flip cards to find matches. Engaging and built entirely with JavaScript.",
    image: MiniGame,
    link: "https://mariavoicugeo.github.io/maching-game/",
  },
];

export default function Carousel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative h-full">
      <Swiper
        modules={[FreeMode]}
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        breakpoints={{
          2650: { slidesPerView: 3 }, // 3 slides
          1950: { slidesPerView: 3 }, // Keep 3 until 1950px
          1949: { slidesPerView: 2 }, // 2 slides from 1949px downward
          1024: { slidesPerView: 2 },
          800:{slidesPerView:1} ,// 1 slide on tablets (1024px and below)
          500:{slidesPerView:1},
          0:{slidesPerView:1}
        }}
        className="w-full h-[800px]"
      >
        {projects.map((project, index) => (
      <SwiperSlide
  key={project.id}
  className="bg-[#c2c2c2] h-[800px] flex items-center justify-center border-r-2 border-[#8080805d] group"
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
>
  <div
    className={`height-carousel flex justify-center h-[800px] w-[100%] items-center flex-col gap-10 transition duration-300 ${
      hoveredIndex === index ? "bg-[#1c1c1c]" : "bg-[#c2c2c2]"
    }`}
  >
    <div className="carousel-box-media flex justify-between flex-row items-start w-[80%] h-[300px]">
      <img
        src={project.image}
        alt={project.title}
        className={`w-[300px] h-[300px] transition duration-300 ${
          hoveredIndex === index ? "opacity-70" : "opacity-100"
        }`}
      />
      <a
        href={project.link}
        className={`w-[45px] h-[45px] bg-[#585858] rounded-full flex justify-center items-center cursor-pointer transition duration-300 ${
          hoveredIndex === index ? "bg-[#d3d3d3]" : ""
        }`}
      >
        <svg
          className={`w-6 h-6 transition duration-300 ${
            hoveredIndex === index ? "text-[#000000]" : "text-[#ffffff]"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center w-[80%] h-[312px] ">
      <h6
        className={`tangerine-regular text-2xl text-left w-full transition duration-300 ${
          hoveredIndex === index ? "text-[#bbbbbb]" : "text-black"
        }`}
      >
        {project.date}
      </h6>
      <h2
        className={`text-media-h2 source-serif  text-6xl text-left font-semibold w-full transition duration-300 ${
          hoveredIndex === index ? "text-[#bbbbbb]" : "text-black"
        }`}
      >
        {project.title}
      </h2>
      <h2
        className={`text-media-h2 source-serif  text-6xl text-left font-normal w-full transition duration-300 ${
          hoveredIndex === index ? "text-[#bbbbbb]" : "text-black"
        }`}
      >
        {project.subtitle}
      </h2>
      <p
        className={`p-media-carousel tangerine-regular  text-2xl font-medium text-left w-full transition duration-300 ${
          hoveredIndex === index ? "text-[#bbbbbb]" : "text-black"
        }`}
      >
        {project.description}
      </p>
    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


/*import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import EComm from "../../../public/img/e-com.png";

export default function Carousel() {
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[FreeMode]}
        slidesPerView={3} // Default for larger screens
        spaceBetween={0} // No gap between slides
        freeMode={true} // Enables touch-based navigation
        breakpoints={{
          0: { slidesPerView: 1 }, // From 0px upwards, show 1 slide (mobile)
          768: { slidesPerView: 2 }, // From 768px upwards, show 2 slides (tablet)
          1024: { slidesPerView: 3 }, // From 1024px upwards, show 3 slides (desktop)
        }}
        className="w-full h-[800px]"
      >
        <SwiperSlide className="bg-[#0f0f0f] h-[800px] flex items-center justify-center border-r-2 border-[#8080805d]">
          <div className="flex justify-center h-[800px]  w-[100%] items-center flex-col gap-10">
            <div className="flex justify-between flex-row items-start w-[80%] ">
              <img src={EComm} alt="" className="w-[300px] h-[300px]" />
              <a
                href="#"
                class="w-[45px] h-[45px] bg-[white] rounded-full flex justify-center items-center cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-[#2e2e2e] dark:text-white -rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center w-[80%] gap-2">
              <h6 className="tangerine-regular text-[#bbbbbb] text-xl text-left w-full">
                09.2024-10.2024
              </h6>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                E-Commerce
              </h2>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                Platform
              </h2>
              <p className="tangerine-regular text-[#bbbbbb] text-xl  text-left w-full">
                This e-commerce website allows users to browse products, add
                them to a shopping cart, and view detailed product information.
                Built with HTML, CSS, and JavaScript, it features a clean,
                responsive design with user-friendly navigation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0f0f0f] h-[800px] flex items-center justify-center border-r-2 border-[#8080805d]">
          <div className="flex justify-center h-[800px]  w-[100%] items-center flex-col gap-10">
            <div className="flex justify-between flex-row items-start w-[80%] ">
              <img src={EComm} alt="" className="w-[300px] h-[300px]" />
              <a
                href="#"
                class="w-[45px] h-[45px] bg-[white] rounded-full flex justify-center items-center cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-[#2e2e2e] dark:text-white -rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center w-[80%] gap-2">
              <h6 className="tangerine-regular text-[#bbbbbb] text-xl text-left w-full">
                09.2024-10.2024
              </h6>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                E-Commerce
              </h2>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                Platform
              </h2>
              <p className="tangerine-regular text-[#bbbbbb] text-xl  text-left w-full">
                This e-commerce website allows users to browse products, add
                them to a shopping cart, and view detailed product information.
                Built with HTML, CSS, and JavaScript, it features a clean,
                responsive design with user-friendly navigation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0f0f0f] h-[800px] flex items-center justify-center border-r-2 border-[#8080805d]">
          <div className="flex justify-center h-[800px]  w-[100%] items-center flex-col gap-10">
            <div className="flex justify-between flex-row items-start w-[80%] ">
              <img src={EComm} alt="" className="w-[300px] h-[300px]" />
              <a
                href="#"
                class="w-[45px] h-[45px] bg-[white] rounded-full flex justify-center items-center cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-[#2e2e2e] dark:text-white -rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center w-[80%] gap-2">
              <h6 className="tangerine-regular text-[#bbbbbb] text-xl text-left w-full">
                09.2024-10.2024
              </h6>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                E-Commerce
              </h2>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                Platform
              </h2>
              <p className="tangerine-regular text-[#bbbbbb] text-xl  text-left w-full">
                This e-commerce website allows users to browse products, add
                them to a shopping cart, and view detailed product information.
                Built with HTML, CSS, and JavaScript, it features a clean,
                responsive design with user-friendly navigation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0f0f0f] h-[800px] flex items-center justify-center border-r-2 border-[#8080805d]">
          <div className="flex justify-center h-[800px]  w-[100%] items-center flex-col gap-10">
            <div className="flex justify-between flex-row items-start w-[80%] ">
              <img src={EComm} alt="" className="w-[300px] h-[300px]" />
              <a
                href="#"
                class="w-[45px] h-[45px] bg-[white] rounded-full flex justify-center items-center cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-[#2e2e2e] dark:text-white -rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center w-[80%] gap-2">
              <h6 className="tangerine-regular text-[#bbbbbb] text-xl text-left w-full">
                09.2024-10.2024
              </h6>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                E-Commerce
              </h2>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                Platform
              </h2>
              <p className="tangerine-regular text-[#bbbbbb] text-xl  text-left w-full">
                This e-commerce website allows users to browse products, add
                them to a shopping cart, and view detailed product information.
                Built with HTML, CSS, and JavaScript, it features a clean,
                responsive design with user-friendly navigation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0f0f0f] h-[800px] flex items-center justify-center border-r-2 border-[#8080805d]">
          <div className="flex justify-center h-[800px]  w-[100%] items-center flex-col gap-10">
            <div className="flex justify-between flex-row items-start w-[80%] ">
              <img src={EComm} alt="" className="w-[300px] h-[300px]" />
              <a
                href="#"
                class="w-[45px] h-[45px] bg-[white] rounded-full flex justify-center items-center cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-[#2e2e2e] dark:text-white -rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center w-[80%] gap-2">
              <h6 className="tangerine-regular text-[#bbbbbb] text-xl text-left w-full">
                09.2024-10.2024
              </h6>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                E-Commerce
              </h2>
              <h2 className="source-serif text-[#bbbbbb] text-6xl  text-left w-full">
                Platform
              </h2>
              <p className="tangerine-regular text-[#bbbbbb] text-xl  text-left w-full">
                This e-commerce website allows users to browse products, add
                them to a shopping cart, and view detailed product information.
                Built with HTML, CSS, and JavaScript, it features a clean,
                responsive design with user-friendly navigation.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
*/
/*port React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import EComm from "../../../public/img/e-com.png"

export default function Carousel() {
  return (
    
       
    <div className="relative w-full h-full">
 

      <Swiper
        modules={[FreeMode]}
        slidesPerView={3}  // Always show 3 slides
        spaceBetween={0}   // No gap between slides
        freeMode={true} // Enables touch-based navigation
        breakpoints={{
          1024: { slidesPerView: 3 }, // Desktop: 3 slides
          768: { slidesPerView: 2 },  // Tablet: 2 slides
          480: { slidesPerView: 1 }   // Mobile: 1 slide
        }}
        className="w-full  h-[500px]"
      >
        <SwiperSlide className="bg-[black] h-[500px] flex items-center justify-center border-r-2 border-[#8080805d]">

            <div className='flex justify-center h-full w-[90%] items-center'>
              <div className='flex justify-between flex-row items-start w-[80%] '>
              <img src={EComm} alt="" className='w-[60px] h-[60px]'/>
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
              </div>
              <div>
                <h6>

                </h6>
                <h2>

                </h2>
                <p>

                </p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[black] h-[500px] flex items-center justify-center border-r-2 border-[#8080805d]">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-[black] h-[500px] flex items-center justify-center border-r-2 border-[#8080805d]">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-[black] h-[500px] flex items-center justify-center border-r-2 border-[#8080805d]">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-[black] h-[500px] flex items-center justify-center border-r-2 border-[#8080805d]">Slide 5</SwiperSlide>
      </Swiper>
    </div>
  
    
  );
}



*/
