import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectHead from "./ProjectHead";
import starfriends from '../assets/StarFriends.png';
import weatherAPI from '../assets/weatherAPI.png';
import calculator from '../assets/calculator.png';
import tictactoe from '../assets/tictactoe.png';
import starwarsreactquery from '../assets/starwarsreactquery.png';
import immigranttoolbox from '../assets/immigranttoolbox.png';



const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <div className="mt-12">
        <ProjectHead />
      </div>
      <div className="grid sm:grid-cols-2 gap-12 mt-12">

 {/* Immigrant Toolbox */}
 <ProjectItem
         img={immigranttoolbox}
          title="An AI powered website that connects immigrants & government programs"
          // projgithub="https://github.com/Promade-com-co/immigrant-toolboxImmigrantT"
          projlink="http://99.79.39.31/"
          description="AI Powered app for Immigrants"
        />
      
   {/* Starwars with react query */}
   <ProjectItem
        img={starwarsreactquery}
          title="Star Wars with React Query: Explore characters and planets from the Star Wars API."
          projgithub="https://github.com/RiniJ7/starwars-with-react-query"
          projlink="https://starwars-with-react-query-12dofntue-rinij7s-projects.vercel.app/"
          description="Displays Star Wars characters with React Query."
        />
       
     
        {/* starwars API */}
        <ProjectItem
        img={starfriends}
          title="This project displays Star Wars characters using data from the Star Wars API."
          projgithub="https://github.com/RiniJ7/starfriends"
          projlink="https://starfriends.vercel.app/"
          description="Starwars API information display"
        />
           
        {/* Weather API */}
        <ProjectItem
        img={weatherAPI}
          title="This weather app uses the OpenWeather API for location-based weather searches."
          projgithub="https://github.com/RiniJ7/weather-app-api"
          projlink="https://weather-app-api-fawn.vercel.app/"
          description="Weather app using the OpenWeather API"
        />
         
        {/* Digital calculator */}
        <ProjectItem
         img={calculator}
          title="This is a simple digital calculator application built using React, HTML5, CSS, and Javascript."
          projgithub="https://github.com/RiniJ7/calculator"
          projlink="https://calculator-omega-eight-85.vercel.app/"
          description="Digital Calculator"
        />
          
        {/* Tic Tac Toe */}
        <ProjectItem
         img={tictactoe}
          title="Tic Tac Toe game uses ReactJS, HTML, CSS, and Node.js for a game experience."
          projgithub="https://github.com/RiniJ7/tic-tac-toe"
          projlink="https://tic-tac-toe-nu-umber.vercel.app/"
          description="Tic Tac Toe Game"
        />
        
      
      </div>
    </div>
  );
};

export default Projects;