import React from 'react';

import { SkillBars } from '../SkillBars/SkillBars';
import './SVGContainer.css';
import { data } from '../../assets/ProfessionalData';

class SVGContainer extends React.Component {
  state = {
    displayTooltip: ''
  };

  handleTooltip = displayTooltip => {
    this.setState({ displayTooltip });
  };

  render() {
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
        <SkillBars
          handleTooltip={this.handleTooltip}
          displayTooltip={this.state.displayTooltip}
          skills={skills}
        />
      </svg>
    );
  }
}

export default SVGContainer;
