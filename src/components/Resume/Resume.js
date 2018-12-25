import React, { Component } from 'react';

import SVGContainer from '../SVGContainer/SVGContainer';
import { allProjects } from '../../assets/ProjectData';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import Ripples from '../Ripples/Ripples';

import './Resume.css';

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      show: false,
      project: null
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = name => {
    console.log(allProjects);
    const project = allProjects.find(proj => proj.title === name);
    console.log(project);
    this.setState({ show: true, project });
  };

  handleHover = str => {
    this.setState({ description: str });
  };

  render() {
    const { description, show, project } = this.state;
    const recentWork = ['Event-mapper', 'Movie-tracker', 'Fantasy-futbol'];
    return (
      <div className="chart-container" id="resume">
        <h1 className="resume-header-title">Resume</h1>
        <main className="resume-page">
          <section className="resume-header">
            <img
              alt="Paul Kim Signature"
              height="60"
              width="180"
              src={require(`../../assets/Images/Paul-kim-logo.png`)}
              className="signature"
            />
            <span className="resume-job-title">
              Front-end <br />
              Developer
            </span>
          </section>
          <section className="resume-programming">
            <span className="programming-skills">
              {' '}
              <i class="fas fa-code" />
              Programming Skills
            </span>
            <SVGContainer />
          </section>
          <section className="resume-about">
            <span className="about-title">
              <i className="far fa-user" />
              About
            </span>
            <p className="about-paragraph">
              I specialize in Javascript, React, and Redux, but enjoy learning
              about and working with other languages and frameworks. Prior
              experience in the military, has provided me a strong foundation in
              team-collaborative efforts and strategic problem solving.
            </p>
          </section>
          <section className="resume-interests">
            <span className="interests">
              <i className="far fa-star" />
              Interests
            </span>
            <ul className="interests-list">
              <li className="interest-item">
                <i className="fas fa-headphones-alt" />
                <span>Music</span>
              </li>
              <li className="interest-item">
                <i className="fas fa-baseball-ball" />
                <span>Baseball</span>
              </li>
              <li className="interest-item">
                <i className="fas fa-hiking" />
                <span>Hiking</span>
              </li>
              <li className="interest-item">
                <i className="fas fa-map-marked-alt" />
                <span>Travel</span>
              </li>
            </ul>
          </section>
          <section className="resume-recent-work">
            <span className="recent-work">
              <i className="fas fa-code-branch" />
              Recent Work
            </span>
            <span className="recent-work-img">
              {recentWork.map((item, index) => {
                return (
                  <span key={`work-${index}`} className="recent-work-gifs">
                    <img
                      height="150"
                      width="200"
                      alt="Tech stack skills"
                      className={
                        description === item
                          ? `recent-work-gif recent-work-gif-${index} recent-work-gif-active`
                          : `recent-work-gif recent-work-gif-${index}`
                      }
                      name={item}
                      src={require(`../../assets/Images/project-ss/${item}.png`)}
                      onMouseEnter={this.handleHover.bind(null, item)}
                      onMouseLeave={this.handleHover.bind(null, '')}
                      onClick={this.handleOpen.bind(null, item)}
                    />
                    {description === item ? (
                      <span
                        className={`resume-project resume-project-${index}`}
                      >
                        Click to view
                      </span>
                    ) : (
                      <span
                        className={`resume-project resume-project-${index}`}
                      >
                        {item}
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
          </section>
          <section className="resume-experience-education">
            <section className="resume-section">
              <span className="experience-title">
                <i className="fas fa-briefcase" />
                Experience
              </span>
              <ul>
                <li>
                  <span />
                  <p className="experience-job-title">Developer</p>
                  <p className="experience-time-period">2017 - Now</p>
                </li>
                <li>
                  <span />
                  <p className="experience-job-title">Combat Medic</p>
                  <p className="experience-time-period">2013 - 2017</p>
                </li>
                <li>
                  <span />
                  <p className="experience-job-title">File Clerk</p>
                  <p className="experience-time-period">2009 - 2011</p>
                </li>
              </ul>
            </section>
            <section className="education-section">
              <span className="education-title">
                <i className="fas fa-graduation-cap" />
                Education
              </span>
              <ul>
                <li>
                  <span />
                  <p className="">Turing School of Software</p>
                  <p className="education-time-period">2018</p>
                </li>
                <li>
                  <span />
                  <p className="experience-job-title">Pacific Union College</p>
                  <p className="education-time-period">2009 - 2013</p>
                </li>
              </ul>
            </section>
          </section>
          <section className="left-aside" />
          {show && (
            <ProjectModal
              show={show}
              handleClose={this.handleClose}
              project={project}
            />
          )}
        </main>
      </div>
    );
  }
}

export default Resume;
