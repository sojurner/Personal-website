import React, { Component } from 'react';
// import Coverflow from 'react-coverflow';

import ProjectModal from '../ProjectModal/ProjectModal';
import './ProjectContent.css';
import ProjectCoverflow from '../ProjectCoverflow/ProjectCoverflow';
class ProjectContent extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      selectedProject: null,
      title: ''
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = selectedProject => {
    this.setState({ show: true, selectedProject });
  };

  render() {
    const { show, selectedProject } = this.state;

    return (
      <section className="project-content-container">
        <ProjectCoverflow
          handleShow={this.handleShow}
          projects={this.props.projects}
        />
        {show && (
          <ProjectModal
            show={show}
            handleClose={this.handleClose}
            project={selectedProject}
          />
        )}
      </section>
    );
  }
}

export default ProjectContent;
