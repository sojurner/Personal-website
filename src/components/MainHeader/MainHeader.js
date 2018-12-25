import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import { Skillset } from '../Skillset/Skillset';
import './MainHeader.css';

class MainHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      displayAudio: false
    };
  }

  handlePlay = () => {
    this.setState({ displayAudio: !this.state.displayAudio });
  };

  render() {
    const { skills, updateDesc, resetDesc } = this.props;
    const { displayAudio } = this.state;
    return (
      <div className="header-job-family">
        <img
          className="family-img"
          alt="family"
          height="450"
          width="380"
          src={require(`../../assets/Images/family-cropped.jpg`)}
        />
        <header className="job-location">
          <h1 className="job-title"> Software Developer</h1>
          <section className="audio-location">
            <AudioPlayer
              className={!displayAudio ? 'audio-hide' : 'audio-show'}
              src={require(`../../assets/music/Ocean-17.mp3`)}
              controls={true}
              onPlay={this.handlePlay}
              onPause={this.handlePlay}
            />
            <h2 className="location-title"> Denver, CO</h2>
          </section>
          <br />

          <br />

          <Skillset
            state={skills}
            updateDesc={updateDesc}
            resetDesc={resetDesc}
          />
        </header>
      </div>
    );
  }
}

export default MainHeader;
