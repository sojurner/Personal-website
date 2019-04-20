import React from 'react';
import './MainLanding.css';
import Skillset from '../Skillset/Skillset';

const MainLanding = ({ mainRef, titleClass }) => {
  return (
    <div ref={mainRef} className="header-job-family">
      <header className="job-location">
        <h1 className={!titleClass ? 'job-title' : 'job-title job-title-show'}>
          {' '}
          Software Developer
        </h1>
        <section className="audio-location">
          <Skillset />
        </section>
      </header>
    </div>
  );
};

export default MainLanding;
