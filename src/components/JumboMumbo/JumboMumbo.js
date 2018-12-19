import React, { Component } from 'react';
import { Jumbotron, Image, Tooltip, Carousel } from 'react-bootstrap';
import { Skillset } from '../Skillset/Skillset';

import './JumboMumbo.css';

class JumboMumbo extends Component {
  state = {
    react: null,
    redux: null,
    jest: null,
    router: null,
    node: null,
    html: null,
    css: null
  };

  updateDesc = (e, description) => {
    e.preventDefault();
    const tooltip = <Tooltip id={description}>{description}</Tooltip>;
    this.setState({ [e.target.name]: tooltip });
  };

  resetDesc = e => {
    this.setState({
      [e.target.name]: null
    });
  };

  render() {
    return (
      <section className="main-page-jumbo">
        <div className="header-job-family">
          <img
            className="family-img"
            alt="family"
            height="450"
            width="380"
            src={require(`../../assets/Images/family-cropped.jpg`)}
          />
          <header className="job-location">
            <h1 className="job-title"> Software Developer</h1>

            <h2 className="location-title"> Denver, CO</h2>
            <br />

            <br />

            <Skillset
              state={this.state}
              updateDesc={this.updateDesc}
              resetDesc={this.resetDesc}
            />
          </header>
        </div>
        <section className="jumbo-experience-education">
          <section className="resume-experience-education">
            <section className="jumbo-resume-section">
              <span className="jumbo-experience-header">
                <i className="fas fa-briefcase" />
                Experience
              </span>
              <ul>
                <li>
                  <span />
                  <p className="jumbo-experience-job-title">Developer</p>
                  <p className="jumbo-experience-time-period">2017 - Now</p>
                </li>
                <li>
                  <span />
                  <p className="jumbo-experience-job-title">Combat Medic</p>
                  <p className="jumbo-experience-time-period">2013 - 2017</p>
                </li>
                <li>
                  <span />
                  <p className="jumbo-experience-job-title">File Clerk</p>
                  <p className="jumbo-experience-time-period">2009 - 2011</p>
                </li>
              </ul>
            </section>
            <section className="jumbo-education-section">
              <span className="jumbo-education-header">
                <i className="fas fa-graduation-cap" />
                Education
              </span>
              <ul>
                <li>
                  <span />
                  <p className="jumbo-education-title">
                    Turing School of Software
                  </p>
                  <p className="jumbo-education-time-period">2018</p>
                </li>
                <li>
                  <span />
                  <p className="jumbo-education-title">Pacific Union College</p>
                  <p className="jumbo-education-time-period">2009 - 2013</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="bucket-items">
          <h3>I'D Love to one Day...</h3>
          <ul>
            <li>Build a site of great ideas</li>
            <li>Live somewhere with no mosquitoes</li>
            <li>Try Franklin's BBQ</li>
            <li>
              Find all the{' '}
              <a
                className="live-simply"
                href="https://www.google.com/search?biw=1309&bih=725&tbm=isch&sa=1&ei=dhMKXIbADdD8jwT6yYCADw&q=live+simply+hats+patagonia&oq=live+simply+hats+patagonia&gs_l=img.3...17247.18825..18935...0.0..0.110.953.8j2......1....1..gws-wiz-img.ltS2TXTSZcc"
              >
                "Live Simply"
              </a>{' '}
              hats
            </li>
            <li>Encounter a bear and survive</li>
            <li>Experience true level</li>
            <li>Work at Reddit, cuz their UI sucks</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default JumboMumbo;
