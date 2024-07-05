import React from "react";
import ExperienceComponent from "./ExperienceComponent";

const data = [
  {
    year: "2024",
    title: "Full Stack Developer, Promade Innovation",
    duration: "February 2024 - Present",
    details: (
      <div>
        - Worked on the home page, navigation and collaborated with UX designer
        to actualize design concepts.
        <br />
        - Implementing the product using TypeScript, React, Next.js, MongoDB,
        Node.js, and Tailwind CSS.
        <br />- Development using Agile Methodologies (with JIRA).
      </div>
    ),
  },
  {
    year: "2023",
    title: "Software Developer, New Idea Machine, Calgary",
    duration: "October 2023 - January 2024",
    details: (
      <div>
        -Collaborated with fully-remote cross-functional teams to Empathize,
        Ideate and Prototype a web application from idea to product development
        stage.
        <br />
        -Developed a responsive React application with components including
        Navigation bar and Side bar, Login and Register forms etc.
        <br />
        -Actively involved in Agile development practices, contributing to the
        development of user stories, spike stories and contribution towards
        completing the user stories.
      </div>
    ),
  },
  {
    year: "2022",
    title: "UX Researcher/ Website Developer (Volunteering), IncluCity, Calgary",
    duration: "December 2022 - Present",
    details: (
      <div>
        -Conducted usability tests for organizations (non-profits & public) with
        web applications facing usability issues and conducted user testing on
        individuals from underrepresented groups in Calgary's society.
        <br />
        -Increased overall usability of digital products by implementing
        data-driven design improvements based on user feedback through
        interviews and analysis of gathered data.
        <br />
        -Created digital usability awareness amongst organizations by conducting
        Heuristic and PURE analysis on certain features like feedback forms.
        <br />
        -Mentored fellow volunteers to onboard them to the working projects in
        progress.
        <br />
        -Conducted usability tests for organizations (non-profits & public) with
        web applications facing usability issues and conducted user testing on
        individuals from underrepresented groups in Calgary's society.
        <br />
        -Increased overall usability of digital products by implementing
        data-driven design improvements based on user feedback through
        interviews and analysis of gathered data.
        <br />
        -Created digital usability awareness amongst organizations by conducting
        Heuristic and PURE analysis on certain features like feedback forms.
      </div>
    ),
  },
  // {
  //   year: "2020",
  //   title: "Kitchen Operations, Milestones Grill & Bar",
  //   duration: "July 2020 - February 2023",
  //   details: (
  //     <div>
  //       -Implemented data-driven demand management, optimizing stock levels and
  //       reducing excess inventory.
  //       <br />
  //       -Ensured strict quality standards and provided leadership to new team
  //       members, fostering ongoing learning and knowledge transfer.
  //     </div>
  //   ),
  // },
  {
    year: "2019",
    title: "Wholesale Manager, The Midwife and the Baker, California",
    duration: "February 2019 - August 2019",
    details: (
      <div>
        -Led communication with 45 wholesale clients for seamless daily product
        delivery, resolving customer issues promptly.
        <br />
        -Identified and on-boarded 4 new wholesale customers through targeted
        marketing and optimized logistics for efficient delivery scheduling.
      </div>
    ),
  },
  {
    year: "2012",
    title: "Assistant Manager Finance, The Luxury Collection by Marriott, India",
    duration: "May 2012 - December 2017",
    details: (
      <div>
        -Applied analytical skills to optimize menu costing and pricing
        strategies for 8 hotel restaurants.
        <br />
        -Managed inventory efficiency and accounts receivables, leveraging SAP
        modules for effective financial management.
      </div>
    ),
  },
  // {
  //   year: "2012",
  //   title: "Management Trainee, The Luxury Collection by Marriott, India",
  //   duration: "May 2012 - May 2013",
  //   details: (
  //     <div>
  //       -Received tailored training in procurement, cost control, and financial oversight for hotel operations. 
  //       <br/>
  //       -Acquired skills across departments to optimize efficiency and expenses in hospitality.
  //     </div>
  //   ),
  // },
  // {
  //   year: "2011",
  //   title: "Management Intern, General Optics Asia Limited",
  //   duration: "March 2011 - May 2011",
  //   details: (
  //     <div>
  //       -Implemented competitive pricing for precision lenses used in defense and aerospace using Activity-based costing.
  //     </div>
  //   ),
  // },
];

const Experience = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl:20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
        Work Experience
      </h1>
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
