import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectHead from "./ProjectHead";
import starfriends from '../assets/StarFriends.png';
import weatherAPI from '../assets/weatherAPI.png';
import calculator from '../assets/calculator.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <div>
        <ProjectHead />
      </div>
      <div className="grid sm:grid-cols-2 gap-12">
        {/* starwars API */}
        <ProjectItem
        img={starfriends}
          title="Star Friends : Displaying the Star Wars characters. The information is extracted from Star Wars API"
          projgithub="https://github.com/RiniJ7/starfriends"
        />
        {/* Weather API */}
        <ProjectItem
        img={weatherAPI}
          title="This weather app uses the OpenWeather API for location-based weather searches."
          projgithub="https://weather-app-api-fawn.vercel.app/"
        />
        {/* Digital calculator */}
        <ProjectItem
         img={calculator}
          title="This is a simple digital calculator application built using React, HTML5, CSS, and Javascript."
          projgithub="https://calculator-omega-eight-85.vercel.app/"
        />
        {/* inventory */}
        <ProjectItem
        //   img={inventory}
          title="Inventory and Payment App & Microservices"
          projgithub="https://github.com/yanliu1111/microservices-fastapi-fullStack-app"
        />
        {/* embeddings */}
        <ProjectItem
        //   img={embeddings}
          title="ChatGPT API Embeddings Supabase"
          projgithub="https://github.com/yanliu1111/ChatGPT-API-embeddings-Supabase"
        />
        {/* flaskrestapi */}
        <ProjectItem
        //   img={flaskrestapi}
          title="Build a REST API with Flask"
          projgithub="https://github.com/yanliu1111/flask-rest-api-project"
          projlink="https://flask-rest-api-project-rmrw.onrender.com/"
        />
 
      
      </div>
    </div>
  );
};

export default Projects;