import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import AnimatedContent from "../../reactBits/CominginText";

export default function NavBar() {
  return (
    <div className="nav-media flex flex-row w-4/5 space-x-0 justify-between">
      <Link to="/about">
        <div className=" cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-125 hover:rotate-3">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 30, friction: 30 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <h4 className="text-font-nav-media text-font text-center text-white text-xl ">About</h4>
          </AnimatedContent>
        </div>
      </Link>

      <nav className="nav-links-media flex flex-row gap-20">
        <Link to="/proiecte">
          <div className="transform transition-all duration-500 ease-in-out hover:-rotate-12 hover:scale-105">
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              config={{ tension: 30, friction: 30 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <h4 className="text-font-nav-media text-font text-center text-white text-xl cursor-pointer">
                Projects
              </h4>
            </AnimatedContent>
          </div>
        </Link>

        <Link to="/contact">
        <div className="transform transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-105">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 30, friction: 30 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <h4 className="text-font-nav-media text-font text-center text-white text-xl cursor-pointer">
              Let's Talk
            </h4>
          </AnimatedContent>
        </div>
        </Link>
      </nav>
    </div>
  );
}
