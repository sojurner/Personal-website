import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

import './Audio.css';

const options = {
  audioLists: [
    {
      name: '17',
      singer: 'Ocean',
      musicSrc:
        'https://res.cloudinary.com/paulkim/video/upload/v1552367822/Ocean-17.mp3'
    },
    {
      name: 'Side B',
      singer: 'jhFly',
      musicSrc:
        'https://res.cloudinary.com/paulkim/video/upload/v1552367849/Side_b.mp3'
    },
    {
      name: 'Arurian Dance',
      singer: 'Nujabes',
      musicSrc:
        'https://res.cloudinary.com/paulkim/video/upload/v1552566100/Nujabes_-_Aruarian_Dance.mp3'
    },
    {
      name: 'Natural Cause',
      singer: 'Emancipator',
      musicSrc:
        'https://res.cloudinary.com/paulkim/video/upload/v1552566112/Emancipator_-_Natural_Cause.mp3'
    },
    {
      name: 'I Need You',
      singer: 'Bojet',
      musicSrc:
        'https://res.cloudinary.com/paulkim/video/upload/v1552367840/I_need_you.mp3'
    },
    {
      name: 'Too Real',
      singer: 'JCHL',
      musicSrc:
        'https://res.cloudinary.com/paulkim/video/upload/v1552416689/Too_Real.mp3'
    }
  ],
  defaultPosition: {
    right: '20px',
    bottom: '15px'
  },
  autoPlay: false
};

const Audio = () => {
  return <ReactJkMusicPlayer {...options} />;
};

export default Audio;
