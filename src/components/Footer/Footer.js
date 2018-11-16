import React from 'react';

import './Footer.css';

export const Footer = ({ weather }) => {
  return (
    <footer className="footer">
      <img
        alt="Weather icon"
        className="weather-icon"
        src={require(`../../assets/Images/weather/${weather.icon}.png`)}
      />
      <div className="weather-info">
        <div className="high-low">
          <h1 className="weather weather-high">↑{weather.high}°F</h1>
          <h1 className="weather weather-low">↓{weather.low}°F</h1>
        </div>
        <p className="weather weather-summary">{weather.summary}</p>
      </div>
      <img
        className="weather-icon"
        alt="Weather icon"
        src={require(`../../assets/Images/weather/${weather.icon}.png`)}
      />
    </footer>
  );
};
