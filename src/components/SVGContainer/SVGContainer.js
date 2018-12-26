import React from 'react';

import { SkillBars } from '../SkillBars/SkillBars';
import './SVGContainer.css';
import { data } from '../../assets/ProfessionalData';

class SVGContainer extends React.Component {
  state = {
    displayTooltip: '',
    delayBars: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ delayBars: false });
    }, 200);
  }

  handleTooltip = displayTooltip => {
    this.setState({ displayTooltip });
  };

  render() {
    const { skills } = data;
    const { displayTooltip, delayBars } = this.state;

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
          displayTooltip={displayTooltip}
          skills={skills}
          delayBars={delayBars}
        />
      </svg>
    );
  }
}

export default SVGContainer;
