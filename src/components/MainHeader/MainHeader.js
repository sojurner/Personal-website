import React from 'react';
import Audio from '../Audio/Audio';
import Skillset from '../Skillset/Skillset';
import './MainHeader.css';

class MainHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      imageLoad: 'image-cover-initial',
      imageDisplay: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ imageLoad: 'image-cover-body' });
      this.setEnd();
    }, 700);
  };

  setEnd = () => {
    setTimeout(() => {
      this.setState({ imageLoad: 'image-cover-end', imageDisplay: true });
    }, 700);
  };

  render() {
    const { imageDisplay } = this.state;
    const { mainRef } = this.props;
    return (
      <div ref={mainRef} className="header-job-family">
        <header className="job-location">
          <h1 className="job-title"> Software Developer</h1>
          <section className="audio-location">
            <Audio />
            <h2 className="location-title"> Denver, CO</h2>
          </section>
        </header>
      </div>
    );
  }
}

export default MainHeader;
