import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ripples from '../Ripples/Ripples';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
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
              <h1 className="quote">
                "One more time, into the <strong>Fray</strong>...
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote">
                ...into the last great <strong>Fight</strong>...
              </h1>
            </Carousel.Item>

            <Carousel.Item>
              <h1 className="quote">
                ...that I'll ever <strong>know</strong>.
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote">
                Live and die on this <strong>Day</strong>...
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote">
                ...Live and die on this <strong>Day</strong>..."
              </h1>
            </Carousel.Item>
          </Carousel>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav pullRight>
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
              href="/projects/React"
              to="/projects/React"
            >
              Projects
            </NavItem>
            <NavItem
              className="projects-tab"
              href="/#gifs"
              to="/#gifs"
              eventKey={3}
            >
              GIFS
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
