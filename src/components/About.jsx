import React from 'react'
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about--section mb-8 sm:mb-16 md:mb-24">
    <div className="about--section--img sm:mr-8 lg:mr-16">
      <img 
      src="./img/about-me.jpeg" 
      alt="About Me" 
 className="w-8 h-8 rounded-full"
      />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        {/* <p className="section--title">About</p> */}
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6">

When I'm not coding, you'll find me practice dancing, hiking, or creating art. Exploring new places and creative pursuits keep my mind fresh and inspired.

        </p>
        {/* <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6">
          Still thinking what to write here
        </p> */}
      </div>
    </div>
  </section>
  )
}

export default About