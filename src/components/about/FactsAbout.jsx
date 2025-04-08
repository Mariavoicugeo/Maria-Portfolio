import React from 'react'
import CircularText from "../../reactBits/CircularText";


import AnimatedContent from "../../reactBits/CominginText";
export default function FactsAbout() {
  return (
    <div>
      <div className="fact-media flex items-center flex-row gap-10 border-2 mt-20 border-[#2222226e] h-[400px]">
          <div className="text-fact-media flex flex-col justify-center items-center border-r-2  border-[#2222226e]  h-[400px] w-[33.3%] ">
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
              <h3 className="lora text-5xl py-4">Soft Skills</h3>
              <ul className="flex flex-col gap-4 text-lora text-lg text-center">
                <li>Systems Thinking</li>
                <li>Growth Mindset</li>
                <li>Bridging the Gap </li>
                <li>Iterative Mindset </li>
              </ul>
            </AnimatedContent>
          </div>

          <div className="text-fact-media w-[33.3%] flex flex-col justify-center items-center border-r-2 border-l-2  border-[#2222226e] h-[400px] gap-10">
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
              <CircularText
                text="Unique & Fun & Curiosities & "
                onHover="slowDown"
                spinDuration={20}
                className="custom-class"
              />
              <ul className="flex flex-col  text-lora text-lg text-center">
                <li>
                  Baking is my therapy—there’s nothing more satisfying than
                  turning stress into a batch of warm, homemade cookies.
                </li>
              </ul>
            </AnimatedContent>
          </div>

          <div className="text-fact-media w-[33.3%] flex flex-col justify-center items-center gap-4 text-center p-3 border-l-2  border-[#2222226e] h-[400px]">
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
              <h3 className="lora text-5xl py-4">Laughs & Lines</h3>
              <ul className="text-lora text-lg text-center">
                <li>
                  What did the coffee say to the developer? 'I'm here to perk
                  you up—I'm Java good mood and ready to brew some code magic!
                </li>
              </ul>
            </AnimatedContent>
          </div>
        </div>
    </div>
  )
}
