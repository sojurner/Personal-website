import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';

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
  const people = descriptions.map((description, index) => {
    const styles = { margin: '0 5px' };
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id={tooltip}>{tooltip}</Tooltip>}
        key={`overlay-${index}`}
      >
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
      </OverlayTrigger>
    );
  });
  return <div className="skillset">{people}</div>;
};

export default withState('tooltip', 'handleTooltip', '')(Skillset);
