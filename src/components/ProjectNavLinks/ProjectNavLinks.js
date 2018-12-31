import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectNavLinks = ({ routes, description }) => {
  const navLinks = routes.map((route, index) => {
    return (
      <NavLink
        key={`nav-${index}`}
        className={`nav-link ${route}`}
        to={`/projects/${route}`}
      >
        {description[index]}
      </NavLink>
    );
  });
  return <nav className="project-navbar">{navLinks}</nav>;
};

export default ProjectNavLinks;
