import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import Projects from '../Projects/Projects';
import { Route } from 'react-router-dom';
import JumboMumbo from '../JumboMumbo/JumboMumbo';
import './Home.css';

export const Home = () => {
  const github = (
    <Tooltip id="github">
      <strong>Github</strong>
    </Tooltip>
  );
  const linkedin = (
    <Tooltip id="linkedin">
      <strong>LinkedIn</strong>
    </Tooltip>
  );

  const mail = (
    <Tooltip id="mail">
      <strong>E-Mail</strong>
    </Tooltip>
  );

  const phone = (
    <Tooltip id="phone">
      <strong>562-483-9937</strong>
    </Tooltip>
  );
  const redirectLink = (event, link) => {
    event.preventDefault();
    window.location = link;
  };

  return (
    <div className="home-container">
      <aside className="contact-aside">
        <h2 className="contact">Contact</h2>
        <div className="icons">
          <OverlayTrigger placement="right" overlay={github}>
            <ion-icon
              name="logo-github"
              className="github-icon"
              onClick={event =>
                redirectLink(event, 'https://www.github.com/sojurner')
              }
            />
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={linkedin}>
            <ion-icon
              name="logo-linkedin"
              onClick={event =>
                redirectLink(
                  event,
                  'https://www.linkedin.com/in/paulkim-sojurner/'
                )
              }
            />
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={mail}>
            <ion-icon
              name="mail"
              onClick={event =>
                redirectLink(
                  event,
                  'https://www.linkedin.com/in/paulkim-sojurner/'
                )
              }
            />
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={phone}>
            <ion-icon name="call" />
          </OverlayTrigger>
        </div>
      </aside>
      <Route exact path="/" component={JumboMumbo} />
      <Route path="/projects" component={Projects} />
    </div>
  );
};

export default Home;
