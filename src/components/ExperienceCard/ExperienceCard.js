import React from 'react';
import { experienceInfo } from '../../assets/ProfessionalData';

import './ExperienceCard.css';

export const ExperienceCard = ({ detailDisplay, handleHover }) => {
  console.log(detailDisplay);
  const experienceCard = experienceInfo.map(item => {
    return (
      <li
        onMouseEnter={handleHover.bind(null, item.career)}
        onMouseLeave={handleHover.bind(null, '')}
      >
        <span />
        <p className="jumbo-experience-job-title">{item.career}</p>
        <section className="jumbo-experience-time-period">
          <p className="jumbo-experience-time-end">{item.end}</p>
          <p className="jumbo-experience-time-start">{item.start} </p>
        </section>
        {detailDisplay === item.career && (
          <section className="detail-popup">{item.details}</section>
        )}
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
