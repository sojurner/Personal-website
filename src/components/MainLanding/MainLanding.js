import React from 'react';
import './MainLanding.css';

const MainLanding = ({ mainRef, titleClass }) => {
  return (
    <div ref={mainRef} className="header-job-family">
      <header className="job-location">
        <h1 className={!titleClass ? 'job-title' : 'job-title job-title-show'}>
          {' '}
          Software Developer
        </h1>
        <section className="audio-location">
          <h2 className="location-title"> Denver, CO</h2>
        </section>
      </header>
    </div>
  );
};

export default MainLanding;
