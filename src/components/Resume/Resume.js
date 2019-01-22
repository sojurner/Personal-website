import React, { Component } from 'react';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import ResumeSkills from '../ResumeSkills/ResumeSkills';
import ResumeAbout from '../ResumeAbout/ResumeAbout';
import ResumeInterests from '../ResumeInterests/ResumeInterests';
import ResumeWork from '../ResumeWork/ResumeWork';
import ResumeExperience from '../ResumeExperience/ResumeExperience';
import ResumeEducation from '../ResumeEducation/ResumeEducation';
// import Ripples from '../Ripples/Ripples';

import './Resume.css';

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      opaque: true
    };
  }

  componentDidMount = () => {
    const opaque = false;

    setTimeout(() => {
      this.setState({ opaque });
    }, 100);
  };

  render() {
    const { opaque } = this.state;
    return (
      <div className={opaque ? 'chart-container-hide' : 'chart-container-show'}>
        <h3 className="resume-header-title">Resume</h3>
        <main className="resume-page">
          <ResumeHeader />
          <i
            className="fas fa-link resume-official-link"
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1anbv6eDYMmSOrqo2xnDf0jVa1caoEIK2/view',
                '_blank'
              )
            }
          />
          <ResumeSkills />
          <ResumeAbout />
          <ResumeInterests />
          <ResumeWork />
          <section className="resume-experience-education">
            <ResumeExperience />
            <ResumeEducation />
          </section>
          <section className="left-aside" />
        </main>
      </div>
    );
  }
}

export default Resume;
