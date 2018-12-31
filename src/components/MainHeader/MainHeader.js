import React from 'react';
import Audio from '../Audio/Audio';
import Skillset from '../Skillset/Skillset';
import './MainHeader.css';

const MainHeader = () => {
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
        <section className="audio-location">
          <Audio />
          <h2 className="location-title"> Denver, CO</h2>
        </section>
        <br />
        <br />
        <Skillset />
      </header>
    </div>
  );
};

export default MainHeader;
