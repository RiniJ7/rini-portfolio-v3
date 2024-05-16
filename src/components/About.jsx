import React from 'react'
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about--section">
    <div className="about--section--img">
      <img 
      src="./img/about-me.jpeg" 
      alt="About Me" 
      style={{ width: '150px', height: '200px',borderRadius: '50%' }}
      />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        {/* <p className="section--title">About</p> */}
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6">
          Still thinking what to write here
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6">
          Still thinking what to write here
        </p>
      </div>
    </div>
  </section>
  )
}

export default About