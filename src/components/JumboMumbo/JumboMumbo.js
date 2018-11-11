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
      <Jumbotron>
        <Image
          className="family-img"
          height="600"
          width="500"
          src={require(`../../assets/Images/family-cropped.jpg`)}
        />
        <Carousel interval={null}>
          <Carousel.Item>
            <h1>I AM..</h1>
            <Carousel.Caption>
              <p>An aspiring Software developer,</p>
              <br />
              <p>currently based in Denver CO</p>
              <br />
              <br />

              <Skillset
                state={this.state}
                updateDesc={this.updateDesc}
                resetDesc={this.resetDesc}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h1>My Interests...</h1>
            <Carousel.Caption>
              <p>I love Programming</p>
              <p>I might be addicted to Reddit</p>
              <p>I might be addicted to Reddit</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }
}

export default JumboMumbo;
