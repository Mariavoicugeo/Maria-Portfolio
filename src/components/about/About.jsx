import React from "react";
import "./About.css";
import CircularText from "../../reactBits/CircularText";
import Timeline from "./TimeLine";
import FadeContent from "../../reactBits/FadeContent";
import AnimatedContent from "../../reactBits/CominginText";
import Spline from '@splinetool/react-spline';
import TextAbout from "./TextAbout";
import FactsAbout from "./FactsAbout";
export default function About() {
  return (
    <div className=" md:ml-64">

      <section className=" w-full h-auto border-t border-[#2222226e]  bg-[#f0f0f0] overflow-x-hidden">
    
        <div className=" border-b border-[#2222226e] w-full flex justify-center items-center py-10 ">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <h3 className="text-center lora text-4xl font-light">
              'Welcome to the story behind my work'
            </h3>
          </FadeContent>
        </div>
     <TextAbout/>
       

        <FactsAbout/>

        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="py-16 px-10">
            <Timeline />
          </div>
        </FadeContent>
      </section>
    </div>
  );
}
