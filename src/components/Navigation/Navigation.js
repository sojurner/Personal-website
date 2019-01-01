import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    this.setState({ key });
  };

  render() {
    const { current, previous } = this.state;
    return (
      <header className="nav-header-show">
        <img
          alt="Paul Kim Signature"
          height="60"
          className={current > previous ? 'logo-hide' : 'logo-show'}
          width="240"
          src={require(`../../assets/Images/Paul-kim-logo.png`)}
        />
        <nav
          className={current > previous ? 'nav-links-hide' : 'nav-links-show'}
        >
          <NavLink className="projects-tab" exact to="/">
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
