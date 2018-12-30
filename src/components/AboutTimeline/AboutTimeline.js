import React from 'react';
import './AboutTimeline.css';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { EducationCard } from '../EducationCard/EducationCard';

class AboutTimeline extends React.Component {
  state = {
    detailDisplay: ''
  };

  handleHover = detailDisplay => {
    this.setState({ detailDisplay });
  };

  render() {
    const { detailDisplay } = this.state;
    return (
      <section className="jumbo-experience-education">
        <section className="resume-experience-education">
          <ExperienceCard
            detailDisplay={detailDisplay}
            handleHover={this.handleHover}
          />
          <EducationCard
            detailDisplay={detailDisplay}
            handleHover={this.handleHover}
          />
        </section>
      </section>
    );
  }
}

export default AboutTimeline;
