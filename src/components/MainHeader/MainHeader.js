import React from 'react';
import { Skillset } from '../Skillset/Skillset';
import './MainHeader.css';

export const MainHeader = ({ state, updateDesc, resetDesc }) => {
  return (
    <div className="header-job-family">
      <img
        className="family-img"
        alt="family"
        height="450"
        width="380"
        src={require(`../../assets/Images/family-cropped.jpg`)}
      />
      <header className="job-location">
        <h1 className="job-title"> Software Developer</h1>

        <h2 className="location-title"> Denver, CO</h2>
        <br />

        <br />

        <Skillset state={state} updateDesc={updateDesc} resetDesc={resetDesc} />
      </header>
    </div>
  );
};
