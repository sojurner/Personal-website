import React, { Component } from 'react';
import ProjectNavLinks from '../ProjectNavLinks/ProjectNavLinks';
import ProjectRoutes from '../ProjectRoutes/ProjectRoutes';
import './Projects.css';
class Projects extends Component {
  state = {
    opaque: true,
    routes: ['React', 'Vue', 'JavaScript', 'Compositions'],
    description: ['React', 'Vue', 'Vanilla JS', 'Comps']
  };

  componentDidMount() {
    const opaque = false;
    setTimeout(() => {
      this.setState({ opaque });
    }, 100);
  }

  render() {
    const { opaque, routes, description } = this.state;
    return (
      <section
        className={
          opaque ? 'project-navigation-hide' : 'project-navigation-show'
        }
      >
        <h1 className="projects-title">Work of Fame</h1>
        <ProjectNavLinks routes={routes} description={description} />
        <ProjectRoutes routes={routes} />
      </section>
    );
  }
}

export default Projects;
