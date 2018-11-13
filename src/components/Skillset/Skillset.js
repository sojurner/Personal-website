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
        overlay={state[description] ? state[description] : null}
      >
        <img
          height="50"
          style={styles}
          name={description}
          onMouseEnter={e => updateDesc(e, descriptions[index])}
          onMouseLeave={resetDesc}
          src={require(`../../assets/Images/${description}.png`)}
        />
      </OverlayTrigger>
    );
  });
  return <div className="skillset">{people}</div>;
};
