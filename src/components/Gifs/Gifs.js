import React, { Component } from 'react';
import * as calls from '../../utilities/apiCalls';
import InfiniteScroll from 'react-infinite-scroll-component';

import './Gifs.css';

class Gifs extends Component {
  constructor() {
    super();
    this.state = {
      gifs: null,
      query: '',
      mappedGifs: [],
      loading: true,
      start: 0,
      end: 15,
      searchResults: ''
    };
  }

  componentDidMount() {
    this.getGifs();
  }

  getGifs = async () => {
    const { start, end } = this.state;
    const gifs = await calls.getGifs('cats');
    this.setState({
      gifs: gifs.data,
      mappedGifs: gifs.data.slice(start, end),
      loading: false
    });
    // this.renderGifs();
  };

  renderGifs = async () => {
    let { start, end, gifs, mappedGifs } = this.state;
    await this.setState({
      start: end + 1,
      end: end + 6
    });
    await setTimeout(async () => {
      await this.setState({
        mappedGifs: [...mappedGifs, ...gifs.slice(start, end)]
      });
    }, 2000);
  };

  render() {
    return (
      <div>
        Gifs
        <div id="scrolling">
          <InfiniteScroll
            dataLength={this.state.mappedGifs.length}
            next={this.renderGifs}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrolling"
          >
            {this.state.mappedGifs.map(gif => {
              const url = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
              return (
                <img className="gif-items" src={url} height="200" width="200" />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Gifs;
