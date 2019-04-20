import React from 'react';

import { withState } from 'recompose';

import './Skillset.css';

const Skillset = ({ tooltip, handleTooltip }) => {
  let descriptions = [
    'React',
    'Redux',
    'Jest',
    'Vue',
    'Ruby',
    'Node',
    'HTML',
    'CSS',
    'Git',
    'material-ui',
    'Typescript'
  ];
  const skills = descriptions.map((description, index) => {
    const styles = { margin: '0 5px' };
    return (
      <div className="skill-box" key={`skill-${index}`}>
        <img
          height="30"
          alt="Showcase of my personal projects"
          style={styles}
          className="skill-icons"
          name={description}
          onMouseEnter={() => handleTooltip(description)}
          onMouseLeave={() => handleTooltip('')}
          src={`https://res.cloudinary.com/paulkim/image/upload/v1552393705/images/skills/${description.toLowerCase()}.png`}
        />
        {tooltip === description && (
          <p className={`skill-tool-tip ${description}`}>{tooltip}</p>
        )}
      </div>
    );
  });
  return <div className="skillset">{skills}</div>;
};

export default withState('tooltip', 'handleTooltip', '')(Skillset);
