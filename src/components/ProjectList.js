import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const toBePlacedProj = projects.map((projects)=>{
    return <div key = {projects} >  {projects}</div>
  }
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects}</div>
    </div>
  );
}

export default ProjectList;
