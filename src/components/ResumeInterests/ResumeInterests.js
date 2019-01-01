import React from 'react';

export default () => (
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
);
