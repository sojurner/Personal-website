import React from 'react';
import Audio from '../Audio/Audio';
import Skillset from '../Skillset/Skillset';
import './MainHeader.css';

class MainHeader extends React.Component {
  state = {
    imageLoad: 'image-cover-initial',
    imageDisplay: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ imageLoad: 'image-cover-body' });
      this.setEnd();
    }, 700);
  }

  setEnd = () => {
    setTimeout(() => {
      this.setState({ imageLoad: 'image-cover-end', imageDisplay: true });
    }, 700);
  };

  render() {
    const { imageDisplay } = this.state;
    return (
      <div className="header-job-family">
        <div className="image-container">
          <div className={this.state.imageLoad} />
          {/* <img
            className={imageDisplay ? 'family-img-show' : 'family-img-hide'}
            alt="family"
            height="450"
            width="380"
            src={require(`../../assets/Images/family-cropped.jpg`)}
          /> */}
        </div>
        <header className="job-location">
          <h1 className="job-title"> Software Developer</h1>
          <section className="audio-location">
            <Audio />
            <h2 className="location-title"> Denver, CO</h2>
          </section>
          <br />
          <br />
          <Skillset />
        </header>
      </div>
    );
  }
}

export default MainHeader;
