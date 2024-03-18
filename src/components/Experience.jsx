import React from "react";
import ExperienceComponent from "./ExperienceComponent";

const data = [
  {
    year: "2024",
    title: "1234",
    duration: "1234",
    details:
      "fasfasdfaDF"  },
      {
        year: "2024",
        title: "1234",
        duration: "1234",
        details:
          "fasfasdfaDF"  },
          {
            year: "2024",
            title: "1234",
            duration: "1234",
            details:
              "fasfasdfaDF"  },
              {
                year: "2024",
                title: "1234",
                duration: "1234",
                details:
                  "fasfasdfaDF"  },
                  {
                    year: "2024",
                    title: "1234",
                    duration: "1234",
                    details:
                      "fasfasdfaDF"  },
     
];

const Experience = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl:20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work & Education</h1>
      {data.map((item, idx) => (
        <ExperienceComponent
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          // projectOne={item.projectOne}
          // projectTwo={item.projectTwo}
          // projectThree={item.projectThree}
        />
      ))}
    </div>
  );
};

export default Experience;