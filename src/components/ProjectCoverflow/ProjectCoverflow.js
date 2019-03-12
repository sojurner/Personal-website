import React from 'react';
import Coverflow from 'react-coverflow';
import { withState } from 'recompose';

const ProjectCoverflow = ({
  projects,
  hoveredProject,
  handleHover,
  handleShow
}) => {
  const images = projects.map((project, index) => {
    return (
      <img
        key={`project-${index}`}
        className="project-gifs"
        onClick={handleShow.bind(null, project)}
        onMouseEnter={() => handleHover(project.title)}
        onMouseLeave={() => handleHover('')}
        style={{ display: 'block', width: '100%' }}
        alt={project.title === hoveredProject ? 'Click to view' : project.title}
        src={project.img_url}
      />
    );
  });
  return (
    <Coverflow
      width="900"
      height="800"
      displayQuantityOfSide={1}
      infiniteScroll={true}
      navigation={true}
      enableScroll={false}
      clickable={true}
      active={0}
    >
      {images}
    </Coverflow>
  );
};

export default withState('hoveredProject', 'handleHover', '')(ProjectCoverflow);
