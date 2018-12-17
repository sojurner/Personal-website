import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Coverflow from 'react-coverflow';

import { allProjects } from '../../assets/ProjectData';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import './ProjectContent.css';
class ProjectContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedProject: null,
      direction: '',
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
    const { direction } = this.state;
    const x = this.state.projects.map((project, index) => {
      return (
        <Image
          key={`project-${index}`}
          className="project-gifs"
          onClick={e => this.handleShow(e, project)}
          onMouseEnter={e => this.handleHover(e, project.title)}
          onMouseLeave={e => this.handleHover(e, '')}
          enableHeading={true}
          style={{ display: 'block', width: '100%' }}
          alt={direction === project.title ? 'Click to view' : project.title}
          src={require(`../../assets/Images/${project.title}.gif`)}
        />
      );
    });

    const { show, selectedProject } = this.state;

    return (
      <Jumbotron className="project-jumbotron">
        <Coverflow
          width="1100"
          height="1000"
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {x}
        </Coverflow>
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
