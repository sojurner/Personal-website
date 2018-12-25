import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProjectContent from '../ProjectContent/ProjectContent';

import './Projects.css';
export default class Projects extends Component {
  state = {
    routes: ['React', 'Vue', 'JavaScript', 'Compositions'],
    description: ['React', 'Vue', 'Vanilla JS', 'Html/Css']
  };

  registerNavLinks = () => {
    return this.state.routes.map((route, index) => {
      return (
        <NavLink
          key={`nav-${index}`}
          onClick={this.showDefault}
          className={`nav-link ${route}`}
          to={`/projects/${route}`}
        >
          {this.state.description[index]}
        </NavLink>
      );
    });
  };

  registerRoutes = () => {
    return this.state.routes.map((route, index) => {
      return (
        <Route
          key={`route-${index}`}
          exact
          path={`/projects/${route}`}
          render={({ match }) => {
            const { path } = match;
            const chosenPath = path.slice(10);
            return <ProjectContent type={chosenPath} />;
          }}
        />
      );
    });
  };

  render() {
    return (
      <section className="project-navigation">
        <h1 className="projects-title">Work of Fame</h1>
        <nav className="project-navbar">{this.registerNavLinks()}</nav>
        {this.registerRoutes()}
      </section>
    );
  }
}
