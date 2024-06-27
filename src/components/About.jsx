import React from 'react'
import "../App.css";

const About = () => {
  return (
    <>
    <section id="about" className="about--section mb-8 sm:mb-16 md:mb-24">
    <div className="about--section--img sm:mr-8 lg:mr-16">
      <img 
      src="./img/aboutMe.png" 
      alt="About Me" 
 className="w-4 h-4 sm:w-16 sm:h-6 md:w-8 md:h-4 lg:w-4 lg:h-4 "
      />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
        {/* <p className="section--title">About</p> */}
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6  text-gray-800">



Hello! When I'm not deep into coding, you'll probably catch me practicing dance moves, exploring hiking trails, or getting lost in an art project. I love discovering new places and diving into creative pursuits—they keep my mind fresh and my spirit inspired.

        </p>
        {/* <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-6">
          Still thinking what to write here
        </p> */}
   



      <div className="flex justify-center items-center p-6">
  <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6">
      <img
        src="./img/1.jpg"
        className="w-full h-32 object-cover rounded-md shadow-lg"
        alt="image1"
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6">
      <img
        src="./img/2.jpg"
        className="w-full h-32 object-cover rounded-md shadow-lg"
        alt="image2"
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6">
      <img
        src="./img/3.jpg"
        className="w-full h-32 object-cover rounded-md shadow-lg"
        alt="image3"
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6">
      <img
        src="./img/4.jpg"
        className="w-full h-32 object-cover rounded-md shadow-lg"
        alt="image4"
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6">
      <img
        src="./img/5.jpg"
        className="w-full h-32 object-cover rounded-md shadow-lg"
        alt="image5"
      />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6">
      <img
        src="./img/6.jpg"
        className="w-full h-32 object-cover rounded-md shadow-lg"
        alt="image6"
      />
    </div>
  </div>
</div>




</div>
    </div>


 






  </section>




  </>
  )
}

export default About