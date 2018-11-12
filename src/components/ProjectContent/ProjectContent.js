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
    console.log('fadsfa');
    event.preventDefault();
    this.setState({ direction });
  };

  render() {
    const x = this.state.projects.map(project => {
      return (
        <Carousel.Item>
          <h1>{project.title}</h1>
          <Carousel.Caption className="project-carousel">
            <img
              height="500"
              src={require(`../../assets/Images/${project.title}.gif`)}
            />
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return <Carousel>{x}</Carousel>;
  }
}

export default ProjectContent;
