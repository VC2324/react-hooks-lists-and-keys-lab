import React from "react";

function NavBar() {
  // Take these links, and make an <a> tag for each one.
  // <a key="home" href="#home">home</a>
  // <a key={linkName} href={`#${linkName}`}>{linkName}</a>
  const links = ["home", "about", "projects"];
  const elementsLinks = links.map((e) =>{

    return {links}
    
  });
  console.log (elementsLinks)

  return <nav>
    <a key="home" href ="#home">Home</a>
    <a key="about" href ="#about">About</a>
    <a key="projects" href = "#projects">Projects</a>
  </nav>;
}

export default NavBar;
