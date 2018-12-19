import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Ripples from '../Ripples/Ripples';

import './Navigation.css';

class Navigation extends Component {
  state = {
    previous: 0,
    current: 0,
    key: 1
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = event => {
    const { scrollTop } = event.srcElement;
    this.setState(prevState => {
      if (prevState.current !== scrollTop) {
        return {
          previous: prevState.current,
          current: scrollTop
        };
      }
    });
  };

  handleSelect = key => {
    console.log(key);
    this.setState({ key });
  };

  render() {
    const { current, previous } = this.state;
    return (
      <header className={current > previous ? 'nav-header-hide' : 'nav-header'}>
        {/* <Ripples /> */}
        <img
          alt="Paul Kim Signature"
          height="60"
          width="240"
          src={require(`../../assets/Images/Paul-kim-logo.png`)}
        />
        <nav className="nav-links">
          <NavLink className="projects-tab" exact to="/" to="/">
            <i className="fas fa-home" />
            Home
          </NavLink>
          <NavLink className="projects-tab" to="/projects/React">
            <i className="fas fa-project-diagram" />
            Projects
          </NavLink>
          <NavLink className="projects-tab" to="/resume">
            <i className="fas fa-scroll" />
            Resume
          </NavLink>
        </nav>
        {/* <NavLink
              className="projects-tab"
              href="/#gifs"
              to="/gifs"
              eventKey={4}
            >
              GIFS
            </NavLink> */}
      </header>
    );
  }
}

export default Navigation;
