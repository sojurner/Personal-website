import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import './ContactHeader.css';

const ContactHeader = ({ opaque, contact }) => (
  <div className={opaque ? 'header-container-hide' : 'header-container-show'}>
    <Header />
    <Contact contact={contact} />
  </div>
);

export default ContactHeader;
