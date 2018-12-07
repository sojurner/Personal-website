import React, { Component } from 'react';
import { Jumbotron, Image, Tooltip, Carousel } from 'react-bootstrap';
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
                <li>Build a site of great ideas</li>
                <li>Live somewhere with no mosquitoes</li>
                <li>Try Franklin's BBQ</li>
                <li>
                  Find all the{' '}
                  <a
                    className="live-simply"
                    href="https://www.google.com/search?biw=1309&bih=725&tbm=isch&sa=1&ei=dhMKXIbADdD8jwT6yYCADw&q=live+simply+hats+patagonia&oq=live+simply+hats+patagonia&gs_l=img.3...17247.18825..18935...0.0..0.110.953.8j2......1....1..gws-wiz-img.ltS2TXTSZcc"
                  >
                    "Live Simply"
                  </a>{' '}
                  hats
                </li>
                <li>Encounter a bear and survive</li>
                <li>Experience true level</li>
                <li>Be that guy</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }
}

export default JumboMumbo;
