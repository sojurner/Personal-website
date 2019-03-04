import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  state = {
    previous: 0,
    current: 0,
    key: 1,
    navDisplay: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    setTimeout(() => {
      this.setState({ navDisplay: true });
    }, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = event => {
    const { className } = event.target;
    if (className === 'root-show' || className === 'root-hide') {
      const { scrollTop } = event.srcElement;
      this.setState(prevState => {
        if (prevState.current !== scrollTop) {
          return {
            previous: prevState.current,
            current: scrollTop
          };
        }
      });
    }
  };

  handleSelect = key => {
    this.setState({ key });
  };

  render() {
    const { current, previous, navDisplay } = this.state;
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
          <NavLink
            title="navbar"
            className="projects-tab home-tab"
            exact
            to="/"
          >
            <div className="tab-item-container">
              <i className="fas fa-home" />
              <p className="nav-text">Home</p>
            </div>
          </NavLink>
          <NavLink
            title="navbar"
            className="projects-tab project-tab"
            exact
            to={`/projects/${'React' ||
              'Vue' ||
              'JavaScript' ||
              'Compositions'}`}
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
