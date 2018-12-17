import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Navbar
        className={current > previous ? 'nav-bar nav-bar-hide' : 'nav-bar'}
      >
        <Ripples />
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="Paul Kim Signature"
                height="60"
                width="240"
                src={require(`../../assets/Images/Paul-kim-logo.png`)}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <h1 className="quote_2">
                <strong>( •.• )ﾉ</strong>
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_1">
                <strong>(ﾉ^∇^)ﾉﾟ</strong>
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_2">
                <strong>(´◕ ◡ ◕｀)</strong>
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_3">
                <strong>( ͡° ͜ʖ ͡°)</strong>
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_3">
                <strong>ᵔᴥᵔ</strong>
              </h1>
            </Carousel.Item>
          </Carousel>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav
            pullRight
            activeKey={this.state.key}
            onSelect={k => this.handleSelect(k)}
          >
            <NavItem
              className="projects-tab"
              eventKey={1}
              componentClass={Link}
              href="/"
              to="/"
            >
              Home
            </NavItem>
            <NavItem
              className="projects-tab"
              eventKey={2}
              componentClass={Link}
              href="/#projects/React"
              to="/projects/React"
            >
              Projects
            </NavItem>
            <NavItem
              className="projects-tab"
              href="/#resume"
              to="/resume"
              eventKey={3}
            >
              Resume
            </NavItem>
            {/* <NavItem
              className="projects-tab"
              href="/#gifs"
              to="/gifs"
              eventKey={4}
            >
              GIFS
            </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
