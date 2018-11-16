import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProjectContent from '../ProjectContent/ProjectContent';

import './Projects.css';
export default class Projects extends Component {
  state = {
    routes: ['Redux', 'React', 'JavaScript', 'Compositions'],
    description: ['React/Redux', 'React', 'Vanilla JavaScript', 'Html/Css']
  };

  registerNavLinks = () => {
    return this.state.routes.map((route, index) => {
      return (
        <NavLink
          onClick={this.showDefault}
          className={`nav-link ${route}`}
          to={`/projects/${route}`}
        >
          {this.state.description[index]}
        </NavLink>
      );
    });
  };

  render() {
    return (
      <section className="project-navigation">
        {this.registerNavLinks()}
        <Route
          exact
          path={`/projects/React`}
          render={({ match }) => {
            const { path } = match;
            const chosenPath = path.slice(10);
            return <ProjectContent type={chosenPath} />;
          }}
        />
        <Route
          exact
          path={`/projects/Redux`}
          render={({ match }) => {
            const { path } = match;
            const chosenPath = path.slice(10);

            return <ProjectContent type={chosenPath} />;
          }}
        />

        <Route
          exact
          path={`/projects/JavaScript`}
          render={({ match }) => {
            const { path } = match;
            const chosenPath = path.slice(10);

            return <ProjectContent type={chosenPath} />;
          }}
        />
        <Route
          exact
          path={`/projects/Compositions`}
          render={({ match }) => {
            const { path } = match;
            const chosenPath = path.slice(10);

            return <ProjectContent type={chosenPath} />;
          }}
        />
      </section>
    );
  }
}
