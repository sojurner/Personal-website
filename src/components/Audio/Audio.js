import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

import './Audio.css';

const options = {
  audioLists: [
    {
      name: '17',
      singer: 'Ocean',
      musicSrc: require('../../assets/music/Ocean-17.mp3')
    },
    {
      name: 'Side B',
      singer: 'jhFly',
      musicSrc: require('../../assets/music/Side_b.mp3')
    },
    {
      name: 'I Need You',
      singer: 'Bojet',
      musicSrc: require('../../assets/music/I_need_you.mp3')
    }
  ],
  defaultPosition: {
    left: '15px',
    bottom: '35px'
  },
  autoPlay: false
};

const Audio = () => {
  return <ReactJkMusicPlayer {...options} />;
};

export default Audio;
