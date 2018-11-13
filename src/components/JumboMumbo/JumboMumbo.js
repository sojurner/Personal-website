import React, { Component } from 'react';
import {
  Jumbotron,
  Image,
  Tooltip,
  OverlayTrigger,
  Carousel
} from 'react-bootstrap';
import { Skillset } from '../Skillset/Skillset';

import './JumboMumbo.css';

class JumboMumbo extends Component {
  state = {
    react: null,
    redux: null,
    jest: null,
    router: null,
    node: null,
    html: null,
    css: null
  };

  updateDesc = (e, description) => {
    e.preventDefault();
    const tooltip = <Tooltip id={description}>{description}</Tooltip>;
    this.setState({ [e.target.name]: tooltip });
  };

  resetDesc = e => {
    this.setState({
      [e.target.name]: null
    });
  };

  render() {
    return (
      <Jumbotron className="main-page-jumbo">
        <Image
          thumbnail
          className="family-img"
          height="400"
          width="330"
          src={require(`../../assets/Images/family-cropped.jpg`)}
        />
        <Carousel interval={null}>
          <Carousel.Item>
            <h1>I AM..</h1>
            <Carousel.Caption className="about-items">
              <p>
                an aspiring <strong> Software Developer</strong>,
              </p>
              <br />
              <p>
                Currently based in <strong> Denver, CO</strong>
              </p>
              <br />
              <br />
              <Skillset
                state={this.state}
                updateDesc={this.updateDesc}
                resetDesc={this.resetDesc}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="journey">
            <h1>My Journey...</h1>
            <Carousel.Caption className="journey-items">
              <ul>
                <li className="even">
                  <strong> BS Biology (Pacific Union College) </strong>:
                  2009-2013
                </li>
                <li className="odd">
                  <strong> Combat Medic (US Army) </strong>: 2013-2017
                </li>
                <li className="even">
                  <strong> Front-end Developer (Turing)</strong> : 2017 - Curr
                </li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>I'd love to one day... </h1>
            <Carousel.Caption className="bucket-items">
              <ul>
                <li className="odd">Use all fingers when typing</li>
                <li className="even">Live somewhere with no mosquitoes</li>
                <li className="odd">Try Franklin's BBQ</li>
                <li className="even">Not be so awkward</li>
                <li className="odd">Encounter a bear and survive</li>
                <li className="even">Experience true level</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }
}

export default JumboMumbo;
