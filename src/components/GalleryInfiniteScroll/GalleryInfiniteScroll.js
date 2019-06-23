import React from 'react';
import { fetchPhotos } from '../../utilities/apiCalls';
import './GalleryInfiniteScroll.css';
import Loading from '../Loading/Loading';

class GalleryInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.location.state.photos,
      hasMore: true
    };
  }

  redirect = () => {
    this.props.history.push('/about');
  };

  // retrieveNextPage = async () => {
  //   const { totalHits } = this.props.location.state;
  //   if (this.state.dataLength === totalHits) {
  //     this.setState({ hasMore: false });
  //   } else {
  //     const nextPage = Math.ceil(totalHits - this.state.dataLength);
  //     if (nextPage > 1) {
  //       const queries = { ...this.props.location.queries, page: nextPage };
  //       const nextPhotos = await fetchPhotos(queries);
  //       const photos = [...this.state.photos, ...nextPhotos.photos];
  //       this.setState({ photos });
  //     }
  //   }
  //   console.log(this.state.photos);
  // };

  render() {
    const { photos } = this.state;
    return (
      <>
        {/* <InfiniteScroll
            hasMore={true}
            dataLength={this.state.photos.length}
            className="gallery-img-wrapper"
            loader={<Loading />}
            next={this.retrieveNextPage}
            onScroll={this.help}
            scrollableTarget="scrolling"
          > */}
        <div className="gallery-img-wrapper">
          {photos.map(photoProps => {
            return <div className="gallery-img-container" {...photoProps} />;
          })}
        </div>
        {/* </InfiniteScroll> */}
        <div className="back-btn">
          <p onClick={this.redirect}>Back to Gallery</p>
        </div>
      </>
    );
  }
}

export default GalleryInfiniteScroll;
