import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import { allProjects } from '../../assets/ProjectData';

class ProjectContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      projects: allProjects.filter(
        project => project.projectType === props.type
      )
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
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
