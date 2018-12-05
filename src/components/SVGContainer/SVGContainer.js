import React from 'react';

import { SkillBars } from '../SkillBars/SkillBars';
import './SVGContainer.css';
import { data } from '../../assets/ProfessionalData';

export const SVGContainer = () => {
  const { skills } = data;

  return (
    <svg
      className="horizontal-chart"
      dx="1000"
      y="00"
      width="600"
      height="260"
      aria-labelledby="title"
      role="img"
    >
      <SkillBars skills={skills} />
    </svg>
  );
};
