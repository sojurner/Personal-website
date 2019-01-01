import React from 'react';

export default () => (
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
);
