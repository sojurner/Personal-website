import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ current, previous, navDisplay }) => {
  return (
    <nav
      className={
        !navDisplay
          ? 'nav-render'
          : current > previous
          ? 'nav-links-hide'
          : 'nav-links-show'
      }
    >
      <NavLink title="navbar" className="projects-tab home-tab" exact to="/">
        <div className="tab-item-container">
          <i className="fas fa-home" />
          <p className="nav-text">Home</p>
        </div>
      </NavLink>
      <NavLink
        title="navbar"
        className="projects-tab project-tab"
        to={`/projects`}
      >
        <div className="tab-item-container">
          <i className="fas fa-project-diagram" />
          <p className="nav-text">Projects</p>
        </div>
      </NavLink>
      <NavLink title="navbar" className="projects-tab resume-tab" to="/resume">
        <div className="tab-item-container">
          <i className="fas fa-scroll" />
          <p className="nav-text">Resume</p>
        </div>
      </NavLink>

      <NavLink title="navbar" className="projects-tab resume-tab" to="/about">
        <div className="tab-item-container">
          <i className="fas fa-user-astronaut" />
          <p className="nav-text">About</p>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
