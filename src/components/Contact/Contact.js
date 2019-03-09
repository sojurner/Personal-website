import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { iconContent } from '../../assets/data/ProfessionalData';
import { withState } from 'recompose';
import './Contact.css';

const Contact = ({ toggleContact, contactDisplay, contact }) => {
  const redirectLink = link => {
    const newTab = window.open(link, '_blank');
    newTab.focus();
  };

  return (
    <>
      <div className={contactDisplay ? 'full-rope' : 'part-rope'} />
      <aside
        className={contactDisplay ? 'contact-aside' : 'contact-aside-half'}
      >
        <div className={!contactDisplay ? 'icons-hide' : 'icons'}>
          {iconContent.map((icon, index) => {
            return (
              <OverlayTrigger
                key={`overlay-${index}`}
                placement={icon.position}
                overlay={icon.tooltip}
              >
                <div className={`ion-icon-wrap ion-icon-wrap-${index}`}>
                  <ion-icon
                    name={icon.name}
                    onClick={redirectLink.bind(null, icon.url)}
                  />
                </div>
              </OverlayTrigger>
            );
          })}
        </div>
      </aside>
      <div
        onClick={() => toggleContact(!contactDisplay)}
        className={
          !contact
            ? 'string-hide'
            : contactDisplay
            ? 'string-full'
            : 'string-half'
        }
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
    </>
  );
};

export default withState('contactDisplay', 'toggleContact', false)(Contact);
