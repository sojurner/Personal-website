import React from 'react';
import './AboutTimeline.css';
import Zoom from 'react-reveal/Zoom';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import EducationCard from '../EducationCard/EducationCard';

const AboutTimeline = ({ aboutRef }) => {
  return (
    <Zoom>
      <section className="jumbo-experience-education" ref={aboutRef}>
        <section className="resume-experience-education">
          <ExperienceCard />
          <EducationCard />
        </section>
      </section>
    </Zoom>
  );
};

export default AboutTimeline;
