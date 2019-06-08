import React from 'react';
import ResourceCards from '../ResourceCard/ResourceCard';

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
        <h1 style={{ paddingTop: '15rem', zIndex: 1000000 }}>
          Work In Progress
        </h1>
        <ResourceCards />
      </div>
    );
  }
}

export default AboutPage;
