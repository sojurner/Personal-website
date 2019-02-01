import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { withState } from 'recompose';

import './Audio.css';

const Audio = ({ handlePlay, displayAudio }) => {
  return (
    <AudioPlayer
      className={!displayAudio ? 'audio-hide' : 'audio-show'}
      src={require(`../../assets/music/Ocean-17.mp3`)}
      controls={true}
      onPlay={() => handlePlay(!displayAudio)}
      onPause={() => handlePlay(!displayAudio)}
    />
  );
};

export default withState('displayAudio', 'handlePlay', false)(Audio);
