import React from 'react';

import { Modal, Image } from 'react-bootstrap';
import './ProjectModal.css';
export const ProjectModal = ({ show, handleClose, project }) => {
  const redirect = link => {
    const newTab = window.open(link, '_blank');
    newTab.focus();
  };
  const imgs = project.technologies.map((tech, index) => {
    return (
      <img
        key={`tech-${index}`}
        height="40"
        alt="Tech stack skills"
        className="modal-tech"
        name={tech}
        src={require(`../../assets/Images/skill-icons/${tech}.png`)}
      />
    );
  });
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          thumbnail
          src={require(`../../assets/Images/project-ss/${project.title}.png`)}
        />
        <div className="imgs">{imgs}</div>

        <h1 className="project-modal-description">{project.description}</h1>
      </Modal.Body>
      <Modal.Footer>
        <div className="icon-links">
          <i
            className="fab fa-github-alt"
            onClick={redirect.bind(null, project.githubURL)}
          />
          <i
            className="fas fa-laptop-code"
            onClick={redirect.bind(null, project.githubPages)}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};
