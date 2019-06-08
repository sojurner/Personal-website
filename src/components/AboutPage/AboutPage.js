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
        <ResourceCards />
      </div>
    );
  }
}

export default AboutPage;
