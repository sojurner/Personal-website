import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
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

  handleShow = selectedProject => {
    this.setState({ show: true, selectedProject });
  };

  handleHover = direction => {
    this.setState({ direction });
  };

  render() {
    const { direction } = this.state;
    const projectImages = this.state.projects.map((project, index) => {
      return (
        <Image
          key={`project-${index}`}
          className="project-gifs"
          onClick={this.handleShow.bind(null, project)}
          onMouseEnter={this.handleHover.bind(null, project.title)}
          onMouseLeave={this.handleHover.bind(null, '')}
          enableHeading={true}
          style={{ display: 'block', width: '100%' }}
          alt={direction === project.title ? 'Click to view' : project.title}
          src={require(`../../assets/Images/project-ss/${project.title}.png`)}
        />
      );
    });

    const { show, selectedProject } = this.state;

    return (
      <section className="project-content-container">
        <Coverflow
          width="1100"
          height="800"
          displayQuantityOfSide={1}
          navigation={true}
          enableScroll={false}
          clickable={true}
          active={0}
        >
          {projectImages}
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
