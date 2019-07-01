import React from 'react';

import { withState } from 'recompose';

import './Skillset.css';

const descriptions = [
  'React',
  'Redux',
  'Jest',
  'Vue',
  'Ruby',
  'Node',
  'HTML',
  'Git',
  'CSS',
  'Material-ui',
  'Typescript'
];

const Skillset = ({ tooltip, handleTooltip }) => {
  const skills = descriptions.map((description, index) => {
    const styles = { margin: '0 5px' };
    return (
      <div
        className={`skill-box skill-box-${index}`}
        key={`skill-${index}`}
        onMouseEnter={() => handleTooltip(description)}
        onMouseLeave={() => handleTooltip('')}
      >
        <img
          height="30"
          width="35"
          alt="Showcase of my personal projects"
          style={styles}
          className="skill-icons"
          name={description}
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
