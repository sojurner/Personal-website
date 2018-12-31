import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Coverflow from 'react-coverflow';

import ProjectModal from '../ProjectModal/ProjectModal';
import './ProjectContent.css';
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

  handleHover = title => {
    this.setState({ title });
  };

  renderProjectImageCards = () => {
    return this.props.projects.map((project, index) => {
      return (
        <Image
          key={`project-${index}`}
          className="project-gifs"
          onClick={this.handleShow.bind(null, project)}
          onMouseEnter={this.handleHover.bind(null, project.title)}
          onMouseLeave={this.handleHover.bind(null, '')}
          enableHeading={true}
          style={{ display: 'block', width: '100%' }}
          alt={
            project.title === this.state.title ? 'Click to view' : project.title
          }
          src={require(`../../assets/Images/project-ss/${project.title}.png`)}
        />
      );
    });
  };

  render() {
    const { show, selectedProject } = this.state;

    return (
      <section className="project-content-container">
        <Coverflow
          width="900"
          height="800"
          displayQuantityOfSide={1}
          infiniteScroll={true}
          navigation={true}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {this.renderProjectImageCards()}
        </Coverflow>
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
