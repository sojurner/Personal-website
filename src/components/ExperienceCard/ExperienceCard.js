import React from 'react';
import { experienceInfo } from '../../assets/ProfessionalData';

import './ExperienceCard.css';

export const ExperienceCard = () => {
  const experienceCard = experienceInfo.map(item => {
    return (
      <li>
        <span />
        <p className="jumbo-experience-job-title">{item.career}</p>
        <section className="jumbo-experience-time-period">
          <p className="jumbo-experience-time-end">{item.end}</p>
          <p className="jumbo-experience-time-start">{item.start} </p>
        </section>
      </li>
    );
  });

  return (
    <section className="jumbo-experience-section">
      <span className="jumbo-experience-header">
        <i className="fas fa-briefcase" />
        Experience
      </span>
      <ul>{experienceCard}</ul>
    </section>
  );
};
