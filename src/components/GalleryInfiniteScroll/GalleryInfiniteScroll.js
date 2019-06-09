import React from 'react';
import './GalleryInfiniteScroll.css';

class GalleryInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.location.state.photos
    };
  }

  render() {
    return (
      <div className={'gallery-img-wrapper'}>
        {this.state.photos.map(photoProps => {
          return <img {...photoProps} alt="category images" />;
        })}
      </div>
    );
  }
}

export default GalleryInfiniteScroll;
