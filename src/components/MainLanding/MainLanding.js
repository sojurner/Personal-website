import React from 'react';
import './MainLanding.css';
import Skillset from '../Skillset/Skillset';

const MainLanding = ({ mainRef, titleClass }) => {
  return (
    <div ref={mainRef} className="header-job-family">
      <header
        className={
          !titleClass ? 'landing-content-hide' : 'landing-content-show'
        }
      >
        <h1 className={'job-title'}> Software Developer</h1>
        <section className="audio-location">
          <Skillset />
        </section>
      </header>
    </div>
  );
};

export default MainLanding;
