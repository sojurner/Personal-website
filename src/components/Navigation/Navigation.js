import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => {
  const [previous, setPrevious] = useState(0);
  const [current, setCurrent] = useState(0);
  const [navDisplay, setNavDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    setTimeout(() => {
      setNavDisplay(true);
    }, 2000);
  }, []);

  const handleScroll = event => {
    const { className } = event.target;
    if (className === 'root-show' || className === 'root-hide') {
      const { scrollTop } = event.srcElement;
      if (current !== scrollTop) {
        setPrevious(current);
        setCurrent(scrollTop);
      }
    }
  };

  return (
    <header
      className={current > previous ? 'nav-header-hide' : 'nav-header-show'}
    >
      <img
        alt="Paul Kim Signature"
        height="60"
        className={current > previous ? 'logo-hide' : 'logo-show'}
        width="240"
        src={require(`../../assets/Images/Paul-kim-logo.png`)}
      />
      <nav
        className={
          !navDisplay
            ? 'nav-render'
            : current > previous
            ? 'nav-links-hide'
            : 'nav-links-show'
        }
      >
        <NavLink title="navbar" className="projects-tab home-tab" exact to="/">
          <div className="tab-item-container">
            <i className="fas fa-home" />
            <p className="nav-text">Home</p>
          </div>
        </NavLink>
        <NavLink
          title="navbar"
          className="projects-tab project-tab"
          exact
          to={`/projects/${'React' || 'Vue' || 'JavaScript' || 'Compositions'}`}
        >
          <div className="tab-item-container">
            <i className="fas fa-project-diagram" />
            <p className="nav-text">Projects</p>
          </div>
        </NavLink>
        <NavLink
          title="navbar"
          className="projects-tab resume-tab"
          to="/resume"
        >
          <div className="tab-item-container">
            <i className="fas fa-scroll" />
            <p className="nav-text">Resume</p>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
