import React from "react";

function ProjectItem({ name, about, technologies }) {


  console.log('tech list', technologies)
  const tech = technologies.map ((language, id)=>{
    
    return <span key={language}>{language}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>

      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
