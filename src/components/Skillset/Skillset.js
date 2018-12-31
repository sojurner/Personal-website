import React from 'react';

import { withState } from 'recompose';

import './Skillset.css';

const Skillset = ({ tooltip, handleTooltip }) => {
  let descriptions = [
    'React',
    'Redux',
    'Jest',
    'Vue',
    'Node',
    'HTML',
    'CSS',
    'Git'
  ];
  const people = descriptions.map(description => {
    const styles = { margin: '0 5px' };
    return (
      <div className="skill-box">
        <img
          height="50"
          alt="Showcase of my personal projects"
          style={styles}
          className="skill-icons"
          name={description}
          onMouseEnter={() => handleTooltip(description)}
          onMouseLeave={() => handleTooltip('')}
          src={require(`../../assets/Images/skill-icons/${description.toLowerCase()}.png`)}
        />
        {tooltip === description && (
          <p className={`skill-tool-tip ${description}`}>{tooltip}</p>
        )}
      </div>
    );
  });
  return <div className="skillset">{people}</div>;
};

export default withState('tooltip', 'handleTooltip', '')(Skillset);
