import React from 'react';

import { Modal, Button, Image } from 'react-bootstrap';
import './ProjectModal.css';
export const ProjectModal = ({ show, handleClose, project }) => {
  const redirect = (event, link) => {
    event.preventDefault();
    window.location = link;
  };
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
          onClick={e => this.handleShow(e, project)}
          thumbnail
          src={require(`../../assets/Images/${project.title}.gif`)}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="icon-links">
          <i
            class="fab fa-github-alt"
            onClick={e => redirect(e, project.githubURL)}
          />
          <i
            class="fas fa-laptop-code"
            onClick={e => redirect(e, project.githubPages)}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};
