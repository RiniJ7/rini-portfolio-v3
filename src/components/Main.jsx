import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="/backgroundImage1.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <div className="w-full p-4  bg-black/20 rounded-lg">
            <h1 className="sm:text-5xl text-4xl font-bold text-white-500">
              Hello! I'm Rini Joy
            </h1>

            <h2 className="flex sm:text-3xl text-2xl pt-4 text-white-300">
              I'm a
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", // Types 'One'
                  2000, // Waits 1s
                  "Tech accessibility advocate", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "User Experience Designer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1em",
                  paddingLeft: "5px",
                }}
              />
            </h2>

            <div className="flex justify-between pt-6 max-w-[200px] w-full text-white-500">
              <FaLinkedinIn
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/rini-joy-5957a437/");
                }}
                src=""
                size={20}
              />
              <FaGithub
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/RiniJ7");
                }}
                src=""
                size={20}
              />
              <FaTwitter
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://twitter.com/rinimani7");
                }}
                src=""
                size={20}
              />
            </div>
            <div className="mt-4 flex justify-between pt-6 w-full text-white-500">
              <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6">

I am a Frontend developer with working understanding of Full Stack development. I am proficient in React.js, Javascript, Node.js , Express.js.
I am certified in Google UX design certification. I am passionate about building equitable web product. Lts'z connect and build together!
.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
