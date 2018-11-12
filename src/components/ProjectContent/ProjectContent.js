import React, { Component } from 'react';
import { Carousel, Jumbotron, Image } from 'react-bootstrap';

import { allProjects } from '../../assets/ProjectData';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import './ProjectContent.css';

class ProjectContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedProject: null,
      direction: false,
      projects: allProjects.filter(
        project => project.projectType === props.type
      )
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event, selectedProject) => {
    event.preventDefault();
    this.setState({ show: true, selectedProject });
  };

  handleHover = (event, direction) => {
    event.preventDefault();
    this.setState({ direction });
  };

  render() {
    const x = this.state.projects.map(project => {
      return (
        <Carousel.Item>
          <h1>{project.title}</h1>
          <Carousel.Caption className="project-carousel">
            <Image
              onClick={e => this.handleShow(e, project)}
              onMouseEnter={e => this.handleHover(e, true)}
              onMouseLeave={e => this.handleHover(e, false)}
              thumbnail
              height="300"
              width="600"
              src={require(`../../assets/Images/${project.title}.gif`)}
            />
            {this.state.direction && (
              <h1 className="click-to-view">Click to View</h1>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    const { show, selectedProject, direction } = this.state;

    return (
      <Jumbotron className="project-jumbotron">
        <Carousel>{x}</Carousel>
        {show && (
          <ProjectModal
            show={show}
            handleClose={this.handleClose}
            project={selectedProject}
          />
        )}
      </Jumbotron>
    );
  }
}

export default ProjectContent;
