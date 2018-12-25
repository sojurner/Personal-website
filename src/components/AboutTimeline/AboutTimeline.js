import React from 'react';
import './AboutTimeline.css';

export const AboutTimeline = () => {
  return (
    <section className="jumbo-experience-education">
      <section className="resume-experience-education">
        <section className="jumbo-resume-section">
          <span className="jumbo-experience-header">
            <i className="fas fa-briefcase" />
            Experience
          </span>
          <ul>
            <li>
              <span />
              <p className="jumbo-experience-job-title">Developer</p>
              <p className="jumbo-experience-time-period">2017 - Now</p>
            </li>
            <li>
              <span />
              <p className="jumbo-experience-job-title">Combat Medic</p>
              <p className="jumbo-experience-time-period">2013 - 2017</p>
            </li>
            <li>
              <span />
              <p className="jumbo-experience-job-title">File Clerk</p>
              <p className="jumbo-experience-time-period">2009 - 2011</p>
            </li>
          </ul>
        </section>
        <section className="jumbo-education-section">
          <span className="jumbo-education-header">
            <i className="fas fa-graduation-cap" />
            Education
          </span>
          <ul>
            <li>
              <span />
              <p className="jumbo-education-title">Turing School of Software</p>
              <p className="jumbo-education-time-period">2018</p>
            </li>
            <li>
              <span />
              <p className="jumbo-education-title">Pacific Union College</p>
              <p className="jumbo-education-time-period">2009 - 2013</p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};
