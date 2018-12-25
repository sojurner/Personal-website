import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { iconContent } from '../../assets/ProfessionalData';
import './Home.css';

export const Home = ({ toggleContact, contactDisplay }) => {
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
          {iconContent.map((icon, index) => {
            return (
              <OverlayTrigger
                key={`overlay-${index}`}
                placement="right"
                overlay={icon.tooltip}
              >
                <ion-icon
                  name={icon.name}
                  onClick={redirectLink.bind(null, icon.url)}
                />
              </OverlayTrigger>
            );
          })}
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
    </div>
  );
};

export default Home;
