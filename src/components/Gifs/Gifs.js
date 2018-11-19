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

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  searchGifs = async e => {
    e.preventDefault();
    const { query, start, end } = this.state;
    this.setState({ start: 0, end: 6 });
    const gifs = await calls.getGifs(query);
    this.setState({
      gifs: gifs.data,
      mappedGifs: gifs.data.slice(start, end),
      loading: false,
      searchResults: query,
      query: ''
    });
  };

  renderGifs = async () => {
    let { start, end, gifs, mappedGifs } = this.state;
    await this.setState({
      start: end + 1,
      end: end + 14
    });
    await setTimeout(async () => {
      await this.setState({
        mappedGifs: [...mappedGifs, ...gifs.slice(start, end)]
      });
    }, 2000);
  };

  render() {
    const { query, mappedGifs, searchResults } = this.state;
    return (
      <div className="gif-container">
        Gifs
        <form className="gif-form" onSubmit={e => this.searchGifs(e)}>
          <input
            className="gif-input"
            type="text"
            value={query}
            onChange={this.handleChange}
          />
          <i className="fab fa-searchengin" />
        </form>
        {searchResults && (
          <h4 className="search-results">
            Search results for: '<strong>{searchResults}</strong>'
          </h4>
        )}
        <div id="scrolling">
          <InfiniteScroll
            className="infinite-scroll"
            dataLength={mappedGifs.length}
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
