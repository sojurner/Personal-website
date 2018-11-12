import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
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
                Great minds discuss <strong>Ideas</strong>
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote">
                Average minds discuss <strong>Events</strong>
              </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote">
                Small minds discuss <strong>People</strong>
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
              href="/projects/Redux"
              to="/projects/Redux"
            >
              Projects
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
