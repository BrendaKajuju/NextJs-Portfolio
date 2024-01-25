import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/narnia.png"
          title="Narnia Library"
          description="This a React-based online library application built with React and Ruby on Rails"
          url="https://phase4-finalproject-frontend.vercel.app/"
        />
        <ProjectCard
          src="/fhubsite.png"
          title="Financial Hub"
          url="https://www.financialhubfx.com/"
          description=" This is a dynamic company website built with JavaScript and TypeScript"
        />
        <ProjectCard
          src="/sboss.png"
          url="https://saintboss.com/"
          title="Saint Boss"
          description="This is a dynamic company website built with HTML, CSS  and JavaScript"
        />
      </div>
    </div>
  );
};

export default Projects;
