import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';

import './Skillset.css';

export const Skillset = ({ state, updateDesc, resetDesc }) => {
  let descriptions = [
    'React',
    'Redux',
    'Enzyme/Jest',
    'React Router',
    'Node',
    'HTML5',
    'CSS3'
  ];
  const people = Object.keys(state).map((description, index) => {
    const styles = { margin: '0 5px' };
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={state[description]}
        key={`overlay-${index}`}
      >
        <img
          height="50"
          alt="Showcase of my personal projects"
          style={styles}
          class="skill-icons"
          name={description}
          onMouseEnter={e => updateDesc(e, descriptions[index])}
          onMouseLeave={resetDesc}
          src={require(`../../assets/Images/skill-icons/${description}.png`)}
        />
      </OverlayTrigger>
    );
  });
  return <div className="skillset">{people}</div>;
};
