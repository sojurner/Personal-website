import React from 'react';
import { withRouter } from 'react-router-dom';
import './GalleryDisplay.css';
import { fetchPhotos } from '../../utilities/apiCalls';
import { galleryList } from '../../assets/data/PersonalData';

class GalleryDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      hoveredImg: ''
    };
  }

  handleHover = hoveredImg => {
    this.setState({ hoveredImg });
  };

  handleClick = async (title, category) => {
    let photos;
    switch (title) {
      case 'scifi':
        photos = await fetchPhotos('movies', category);
        this.props.history.push({
          pathname: '/about/movies',
          state: { photos }
        });
        return;
      case 'Nujabes RIP':
        photos = await fetchPhotos('hip hop', category);
        this.props.history.push({
          pathname: '/about/music',
          state: { photos }
        });
        return;
      case 'Minecraft':
        photos = await fetchPhotos(title, category);
        this.props.history.push({
          pathname: '/about/games',
          state: { photos }
        });
        return;
      default:
        photos = await fetchPhotos(title, category);
        this.props.history.push({
          pathname: `/about/${category}`,
          state: { photos }
        });
        return;
    }
  };

  render() {
    return (
      <div className="wrapper">
        {galleryList.map((imgProps, index) => {
          const { title, category } = imgProps;
          return (
            <div
              onClick={this.handleClick.bind(null, title, category)}
              onMouseEnter={this.handleHover.bind(null, title)}
              onMouseLeave={this.handleHover.bind(null, '')}
              key={`about-img-${index}`}
              {...imgProps}
            >
              {this.state.hoveredImg === title && <h2>{title}</h2>}
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(GalleryDisplay);
