import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import './Home.css';

export const Home = ({ toggleContact, contactDisplay }) => {
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
  const redirectLink = link => {
    const newTab = window.open(link, '_blank');
    newTab.focus();
  };

  return (
    <div className="home-container">
      <div className={contactDisplay ? 'full-rope' : 'part-rope'} />
      <aside
        className={contactDisplay ? 'contact-aside' : 'contact-aside-half'}
      >
        <div className={!contactDisplay ? 'icons-hide' : 'icons'}>
          <OverlayTrigger placement="right" overlay={github}>
            <ion-icon
              name="logo-github"
              className="github-icon"
              onClick={redirectLink.bind(
                null,
                'https://www.github.com/sojurner'
              )}
            />
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={linkedin}>
            <ion-icon
              name="logo-linkedin"
              onClick={redirectLink.bind(
                null,
                'https://www.linkedin.com/in/paulkim-sojurner/'
              )}
            />
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={mail}>
            <ion-icon
              name="mail"
              onClick={redirectLink.bind(
                null,
                'https://www.paul.kim0591@gmail.com'
              )}
            />
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={phone}>
            <ion-icon name="call" />
          </OverlayTrigger>
        </div>
      </aside>
      <div
        onClick={toggleContact}
        className={contactDisplay ? 'string-full' : 'string-half'}
      >
        <section className="contact-string-icon">
          <p className="contact-string">Contact</p>
          <i
            className={
              contactDisplay ? 'fas fa-caret-left' : 'fas fa-caret-right'
            }
          />
        </section>
      </div>
      {/* <div className="string string-2" /> */}
    </div>
  );
};

export default Home;
