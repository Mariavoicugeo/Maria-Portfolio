import React from "react";
import TextPressure from "../../reactBits/TextPressure"
import NavBar from "../navBar/NavBar";
import AnimatedContent from "../../reactBits/CominginText"
import Spline from '@splinetool/react-spline';
import "./IntroPage.css";

export default function IntroPage() {
  return (
  <div className="w-full flex items-center justify-center text-center h-screen">
        <Spline scene="https://prod.spline.design/yp8rOn0jiiSPE69S/scene.splinecode" className="absolute"/>
      <div className="flex items-center justify-center text-center flex-col text-[black]  w-[97%] h-[97%] " >
      <NavBar/>
      <h1 className="text-pressure-media w-4/5 text-9xl font-bold  sm:h-30 md:h-30 lg:h-50 xl:h-50">
        {" "}
        <TextPressure
          text="Voicu&nbsp;Maria"
          flex={true}
          alpha={false}
          stroke={false}
          width={false}
          weight={true}
          italic={true}
          textColor="white"
          minFontSize={40}
        />
      </h1>
      
    
      <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <h2 className="text-font text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-5 text-white">
            Bringing your dreams to life on the web
          </h2>
        </AnimatedContent>
    </div>
  </div>
  );
}








/*import React from "react";
import TextPressure from "../../reactBits/TextPressure";
import NavBar from "../navBar/NavBar";
import AnimatedContent from '../../reactBits/CominginText'
export default function IntroPage() {
  return (
  <div className="w-full flex items-center justify-center text-center h-screen">
      <div className="flex items-center justify-center text-center flex-col  bg-[#f7f7f7] text-[black] border-4 border-[black] w-[97%] h-[97%] " >
      <NavBar/>
      <h1 className=" w-4/5 text-9xl font-bold  sm:h-30 md:h-30 lg:h-50 xl:h-50">
        {" "}
        <TextPressure
          text="Voicu&nbsp;Maria"
          flex={true}
          alpha={false}
          stroke={false}
          width={false}
          weight={true}
          italic={true}
          textColor="black"
          minFontSize={100}
        />
      </h1>
      
      <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
 <h2 className="text-font text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-5">Bringing your dreams to life on the web</h2>
</AnimatedContent>

    </div>
  </div>
  );
}*/
