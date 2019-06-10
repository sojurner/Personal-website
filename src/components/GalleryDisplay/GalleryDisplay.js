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
    let queries;
    switch (title) {
      case 'scifi':
        queries = { q: 'movies', category, editors_choice: true, per_page: 40 };
        photos = await fetchPhotos(queries);
        this.props.history.push({
          pathname: '/about/movies',
          state: { ...photos, queries }
        });
        return;
      case 'Nujabes RIP':
        queries = { q: 'hip hip', category, per_page: 40 };
        photos = await fetchPhotos(queries);
        this.props.history.push({
          pathname: '/about/music',
          state: { ...photos, queries }
        });
        return;
      case 'Minecraft':
        queries = { q: title, category, per_page: 40 };
        photos = await fetchPhotos(queries);
        this.props.history.push({
          pathname: '/about/games',
          state: { ...photos, queries }
        });
        return;
      default:
        queries = { q: title, category, per_page: 40 };
        photos = await fetchPhotos(queries);
        this.props.history.push({
          pathname: `/about/${category}`,
          state: { ...photos, queries }
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
