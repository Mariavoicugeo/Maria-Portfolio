import React from "react";
import Skills from "./Skills";
import AnimatedContent from "../../reactBits/CominginText";
import FadeContent from "../../reactBits/FadeContent";
import Carousel from "./Carousel";
import "./Proiecte.css";
export default function Proiecte() {
  return (
<div className="md:ml-64" >
<div className="flex justify-center items-center flex-col  relative bg-[#f0f0f0] ">
      
      <div className="mediaquery flex h-full gap-1 items-center flex-row w-full mt-20">
        <div className="text-media flex justify-center items-center flex-col w-[50%]">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="flex justify-center items-center flex-col">
              <h3 className=" lora text-8xl relative pb-20 ">Case Studies</h3>
              <p className="p-media lora text-2xl relative pb-10 text-center w-[50%]">
                I'm Voicu Maria, a web developer proficient in HTML, CSS,
                JavaScript, React, and Tailwind CSS. I specialize in creating
                responsive and user-friendly web applications.
              </p>
            </div>
          </AnimatedContent>
        </div>
        <FadeContent blur={true} duration={1100} easing="ease-out" initialOpacity={0} className="w-[50%] media-skills">
  {/* Anything placed inside this container will be fade into view */}
  <Skills />
</FadeContent>

        
      </div>

    </div >
  <div>
  <Carousel/>
  </div>
</div>
  );
}
