import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

const DEFAULT_CONTENT = {
  title: [],
  img: { src: "", alt: "" },
  description: "",
  tech: [],
  link: "",
  index: 0
};

const Projects = props => {
  const [modalToggle, setModalToggle] = useState({
    open: false,
    content: DEFAULT_CONTENT
  });
  const handleToggle = (open, content = DEFAULT_CONTENT) => {
    setModalToggle(() => {
      return {
        open,
        content
      };
    });
  };
  const Tags = tech => {
    return tech.map((tech, i) => (
      <a key={i} className="tech" href={tech.link}>
        {tech.name}
      </a>
    ));
  };

  const List = projects => {
    return projects.map((project, index) => (
      <div key={index} className={`project project--${index + 1}`}>
        <button
          className="project__image button-transitions"
          onClick={() => handleToggle(true, { ...project, index })}
        >
          <img src={project.img.src} alt={project.img.alt} />
        </button>
      </div>
    ));
  };

  return (
    <section className="projects wrapper">
      <div className="container">
        <div className="projects__heading heading">
          <h2>Things I've Worked On</h2>
        </div>
        <div className="projects__list">{List(props.projects)}</div>
      </div>
      <Modal toggle={modalToggle} dismissModal={handleToggle} submitText="View">
        <div className={`project project--${modalToggle.content.index + 1}`}>
          <div className="project__logo">
            <img
              src={modalToggle.content.img.src}
              alt={modalToggle.content.img.alt}
            />
          </div>
          <div className="project__content">
            <div className="project__stack">
              {Tags(modalToggle.content.tech)}
            </div>
            <p
              className="project__description"
              dangerouslySetInnerHTML={{
                __html: modalToggle.content.description
              }}
            />
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
