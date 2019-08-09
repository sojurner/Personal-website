import React from 'react';
import ResourceCards from '../ResourceCard/ResourceCard';
import GalleryDisplay from '../GalleryDisplay/GalleryDisplay';

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          height: 'inherit',
          width: 'inherit',
          color: 'white'
        }}
      >
        <div
          style={{
            margin: '15rem 0 2rem 0',
            textAlign: 'center',
            fontSize: '4rem'
          }}
        >
          Wall of Interests
        </div>
        <GalleryDisplay />
        <ResourceCards />
      </div>
    );
  }
}

export default AboutPage;
