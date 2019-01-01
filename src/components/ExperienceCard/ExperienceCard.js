import React from 'react';
import { experienceInfo } from '../../assets/ProfessionalData';
import { withState } from 'recompose';
import './ExperienceCard.css';

const ExperienceCard = ({ detailDisplay, handleHover }) => {
  const experienceCard = experienceInfo.map((item, index) => {
    return (
      <li
        key={`experience-${index}`}
        onMouseEnter={() => handleHover(item.career)}
        onMouseLeave={() => handleHover('')}
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

export default withState('detailDisplay', 'handleHover', '')(ExperienceCard);
