import React, { useState } from 'react';
import "../App.css";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <>
      <section id="about" className="about--section mb-8 sm:mb-16 md:mb-24">
        <div className="about--section--img sm:mr-8 md:mr-8 lg:mr-8">
          <img 
            src="./img/aboutMe.png" 
            alt="me in pictorial representation" 
            className="w-18 h-18 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-36 lg:h-36"
          />
        </div>

        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Hello!</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl sm:pb-4 md:pb-4 lg:pb-8 text-gray-800 text-justify">
              Hello! When I'm not deep into coding, you'll probably catch me practicing dance moves, exploring hiking trails, or getting lost in an art project. I love discovering new places and diving into creative pursuits—they keep my mind fresh and my spirit inspired.
            </p>

            <div className="flex justify-center items-center p-6">
              <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((image, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <img
                      src={`./img/${image}`}
                      className="w-full h-32 object-cover rounded-md shadow-lg cursor-pointer"
                      alt={`Creative work ${index + 1}`}
                      onClick={() => openModal(`./img/${image}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <button
                className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
              <img src={currentImage} className="max-w-full max-h-screen rounded-md" alt="Selected work" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default About;
