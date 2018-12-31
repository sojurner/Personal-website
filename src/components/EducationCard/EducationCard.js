import React from 'react';
import { educationInfo } from '../../assets/ProfessionalData';
import { withState } from 'recompose';
import './EducationCard.css';

const EducationCard = ({ detailDisplay, handleHover }) => {
  const educationCard = educationInfo.map(item => {
    return (
      <li
        onMouseEnter={() => handleHover(item.institution)}
        onMouseLeave={() => handleHover('')}
      >
        <span />
        <p className="jumbo-education-title">{item.institution}</p>
        <section className="jumbo-education-time-period">
          <p className="jumbo-education-time-end">{item.end}</p>
          <p className="jumbo-education-time-start">{item.start}</p>
        </section>
        {detailDisplay === item.institution && (
          <section className="detail-popup">{item.details}</section>
        )}
      </li>
    );
  });

  return (
    <section className="jumbo-education-section">
      <span className="jumbo-education-header">
        <i className="fas fa-graduation-cap" />
        Education
      </span>
      <ul>{educationCard}</ul>
    </section>
  );
};

export default withState('detailDisplay', 'handleHover', '')(EducationCard);
