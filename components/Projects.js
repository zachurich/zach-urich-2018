import React from "react";
import Link from "next/link";

const Projects = props => {
  const Tags = project => {
    return project.tech.map((tech, i) => (
      <a key={i} className="tech" href={tech.link}>
        {tech.name}
      </a>
    ));
  };

  const Projects = projects => {
    return projects.map((project, index) => (
      <div
        key={index}
        className={`project ${(index + 1) % 2 === 0 ? "even" : "odd"}`}
      >
        <div className="project__image">
          <img src={project.img.src} alt={project.img.alt} />
        </div>
        <div className="project__content">
          <h3>{project.title}</h3>
          <div className="project__stack">{Tags(project)}</div>
          <p
            className="project__description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <a href={project.link} target="_blank">
            View Project
          </a>
        </div>
      </div>
    ));
  };

  return (
    <section className="projects wrapper">
      <div className="container">
        <div className="projects__heading heading">
          <h2>Things I've Worked On</h2>
        </div>
        <div className="projects__list">{Projects(props.projects)}</div>
      </div>
    </section>
  );
};

export default Projects;
