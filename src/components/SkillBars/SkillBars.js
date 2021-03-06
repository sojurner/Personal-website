import React from 'react';

import './SkillBars.css';

export const SkillBars = ({
  skills,
  handleTooltip,
  displayTooltip,
  delayBars
}) => {
  return Object.keys(skills).map((key, index) => {
    return (
      <g
        key={`bar-${index}`}
        className={`bar bar${index}`}
        onMouseEnter={handleTooltip.bind(null, key)}
        onMouseLeave={handleTooltip.bind(null, '')}
        height={5}
      >
        <rect
          className="lead-bar"
          width={500}
          height={4}
          rx="3"
          ry="1"
          x={skills[key].x}
          y={skills[key].y * 1.1 - 0.8}
        />
        <rect
          className={delayBars ? 'skill-bar-hide' : 'skill-bar-show'}
          style={{ transition: `${1 + index * 0.2}s linear` }}
          rx="5"
          ry="5"
          width={skills[key].width}
          height={skills[key].height}
          x={skills[key].x}
          y={skills[key].y * 1.1 - 3}
        />
        <text x="0" y={31 + 28 * index} className="bar-text">
          {key}
        </text>
        {/* <text
          className={
            displayTooltip === key ? 'tooltip-text' : 'tooltip-text-hide'
          }
          x={`${parseInt(skills[key].width) + 100}`}
          y={30 + 25 * index}
        >
          {skills[key].tooltip}
        </text>
        )} */}
      </g>
    );
  });
};
