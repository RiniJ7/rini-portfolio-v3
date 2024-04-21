import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectHead from "./ProjectHead";
import starfriends from '../assets/StarFriends.png';
import weatherAPI from '../assets/weatherAPI.png';
import calculator from '../assets/calculator.png';
import tictactoe from '../assets/tictactoe.png';
import starwarsreactquery from '../assets/starwarsreactquery.png';

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
        {/* Tic Tac Toe */}
        <ProjectItem
         img={tictactoe}
          title="Welcome to Tic Tac Toe with React! This project uses ReactJS, HTML, CSS, and Node.js for a fun game experience."
          projgithub="https://tic-tac-toe-nu-umber.vercel.app/"
        />
        {/* Starwars with react query */}
        <ProjectItem
        img={starwarsreactquery}
          title="Star Wars with React Query: Explore characters and planets from the Star Wars API with a user-friendly interface."
          projgithub="https://starwars-with-react-query-12dofntue-rinij7s-projects.vercel.app/"
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