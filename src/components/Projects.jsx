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
          title="An AI powered website that connects immigrants with relevant government programs"
          projgithub="https://github.com/Promade-com-co/immigrant-toolboxImmigrantT"
          projlink="http://99.79.39.31/"
        />
   {/* Starwars with react query */}
   <ProjectItem
        img={starwarsreactquery}
          title="Star Wars with React Query: Explore characters and planets from the Star Wars API."
          projgithub="https://starwars-with-react-query-12dofntue-rinij7s-projects.vercel.app/"
        />
       

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
        {/* Tic Tac Toe */}
        <ProjectItem
         img={tictactoe}
          title="Tic Tac Toe game uses ReactJS, HTML, CSS, and Node.js for a game experience."
          projgithub="https://tic-tac-toe-nu-umber.vercel.app/"
        />
      
      
      </div>
    </div>
  );
};

export default Projects;