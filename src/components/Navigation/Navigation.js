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
              <h1 className="quote_1">Santa Claus is a reverse burglar </h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_2">The more fast food you eat ...</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_2">... the slower you become.</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_3">The Big Bang ...</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1 className="quote_3">... made no sound</h1>
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
