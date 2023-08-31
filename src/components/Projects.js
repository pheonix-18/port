import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal Projects
          </h1>
          As a software developer, I am excited to present my personal project portfolio, showcasing my projects are a testament to my passion for technology and my drive to continuously improve my skills and knowledge.
Each project provides an in-depth overview of the problem addressed, the technologies used, and the approach taken. To provide a comprehensive understanding of my work, I have included screenshots, live demos and code repositories. My projects are diverse, ranging from web and mobile applications to data analysis and visualization. Some were completed independently while others were completed as part of a team. These projects showcase my versatility as a developer, highlighting my expertise in front-end and back-end development, database management and deployment.
I am proud of the innovative solutions I have developed and I am eager to share my work with you. Please take a look at my personal projects and see for yourself the quality of my work.



        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <h2 className="text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}