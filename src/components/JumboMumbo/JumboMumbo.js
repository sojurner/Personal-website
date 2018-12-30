import React, { Component } from 'react';
import { Tooltip } from 'react-bootstrap';

import './JumboMumbo.css';
import AboutTimeline from '../AboutTimeline/AboutTimeline';
import MainHeader from '../MainHeader/MainHeader';
import { BucketList } from '../BucketList/BucketList';

class JumboMumbo extends Component {
  state = {
    react: null,
    redux: null,
    jest: null,
    vue: null,
    node: null,
    html: null,
    css: null,
    git: null
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

  handlePlay = () => {
    this.setState({ displayAudio: !this.state.displayAudio });
  };

  render() {
    return (
      <section className="main-page-jumbo">
        <MainHeader
          skills={this.state}
          updateDesc={this.updateDesc}
          resetDesc={this.resetDesc}
        />
        <AboutTimeline />
        <BucketList />
      </section>
    );
  }
}

export default JumboMumbo;
