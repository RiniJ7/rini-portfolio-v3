import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const ProjectItem = ({ img, title, projgithub, projlink, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-md bg-gray-400 rounded-xl group">
      <img
        src={img}
        alt={title}
        className="rounded-t-xl group-hover:opacity-10 object-cover w-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex p-4 justify-center gap-20 flex-wrap">
          {projgithub && (
            <a
              className="text-white font-bold hover:scale-105 transition-all duration-300"
              href={projgithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={32} />
            </a>
          )}
          {projlink && (
            <a
              className="text-white font-bold hover:scale-105 transition-all duration-300"
              href={projlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiPagesLine size={32} />
            </a>
          )}
        </div>
      </div>
      {description && (
        <div className="bg-white w-full p-4 rounded-b-xl">
          <h3 className="text-center text-gray-800">{description}</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
