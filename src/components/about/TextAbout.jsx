import React from 'react'
import Me from "../../../public/img/me.jpg"
import FadeContent from "../../reactBits/FadeContent";
export default function TextAbout() {
  return (
    <div>
       <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className=" text-about-media flex justify-center items-center flex-row w-full gap-20 h-auto relative py-20 border-b-2 border-[#2222226e]">
            <div className="flex justify-center items-center w-[40%] h-full width-img-about ">
              <img src={Me} alt="" className="w-full h-[800px] " />
            </div>
            <div className="desc-about-media flex justify-center items-start w-[40%] h-auto flex-col gap-16">
              <h1 className="lora text-7xl font-thin">
                Web <br></br> Developer
              </h1>

              <div className="grid grid-cols-1 grid-rows-1 gap-8">
                <div className="row-span-2 text-2xl md:text-xl text-justi">
                  Hello! My name is Maria, and I’m a passionate and dedicated
                  front-end developer who loves transforming ideas into
                  beautiful, functional websites. Over the years, I’ve honed my
                  skills in HTML, CSS, JavaScript, and React, always focusing on
                  creating intuitive and visually appealing user interfaces. I’m
                  excited about the world of web development because it allows
                  me to merge my love for creativity and problem-solving. My
                  goal is to craft seamless user experiences that make the web a
                  more engaging place, whether through smooth animations,
                  responsive layouts, or interactive features.
                  <br />
                  <br />
                  I’m currently working on expanding my skill set beyond
                  front-end development by exploring the back-end world with
                  Node.js, Express, and MongoDB. I’m fascinated by how the front
                  and back-end come together to create complete web
                  applications, and I’m eager to gain more experience in
                  full-stack development. Additionally, I’m always looking to
                  stay up-to-date with the latest trends and technologies in the
                  industry, such as Progressive Web Apps (PWAs) and JAMstack
                  architecture, as I believe they are shaping the future of web
                  development. My long-term goal is to contribute to meaningful
                  projects that not only solve problems but also push the
                  boundaries of what’s possible in web design and development.
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
    </div>
  )
}
