import React from 'react';
import './GalleryInfiniteScroll.css';

class GalleryInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.location.state.photos
    };
  }

  redirect = () => {
    this.props.history.push('/about');
  };

  render() {
    return (
      <>
        <div className={'gallery-img-wrapper'}>
          {this.state.photos.map(photoProps => {
            return <div className="gallery-img-container" {...photoProps} />;
          })}
        </div>
        <div className="back-btn">
          <p onClick={this.redirect}>Back to Gallery</p>
        </div>
      </>
    );
  }
}

export default GalleryInfiniteScroll;
