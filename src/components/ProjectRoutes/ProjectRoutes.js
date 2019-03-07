import React from 'react';
import { Route } from 'react-router-dom';

import ProjectContent from '../ProjectContent/ProjectContent';
import { allProjects } from '../../assets/data/ProjectData';

const ProjectRoutes = ({ routes }) => {
  return routes.map((route, index) => {
    return (
      <Route
        key={`route-${index}`}
        exact
        path={`/projects/${route}`}
        render={({ match }) => {
          const { path } = match;
          const chosenPath = path.slice(10);
          const projects = allProjects.filter(
            proj => proj.projectType === chosenPath
          );
          return <ProjectContent projects={projects} />;
        }}
      />
    );
  });
};

export default ProjectRoutes;
