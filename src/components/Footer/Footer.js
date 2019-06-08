import React from 'react';

import './Footer.css';

const Footer = ({ weather }) => {
  return (
    <footer className="footer">
      <div className="weather-info">
        <div className="high-low">
          <h1 className="weather weather-high">
            <i className="fas fa-temperature-high" />
            {weather.high}°F
          </h1>
          <h1 className="weather weather-low">
            <i className="fas fa-temperature-low" />
            {weather.low}°F
          </h1>
        </div>
        <div className="weather-desc-img">
          <img
            alt="Weather icon"
            className="weather-icon-left"
            src={require(`../../assets/weather/${weather.icon}.svg`)}
          />
          <p className="weather weather-summary">{weather.summary}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
