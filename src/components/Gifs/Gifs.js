import React, { Component } from 'react';
import * as calls from '../../utilities/apiCalls';
import InfiniteScroll from 'react-infinite-scroll-component';

import './Gifs.css';

class Gifs extends Component {
  constructor() {
    super();
    this.state = {
      gifs: null,
      input: '',
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
    const gifs = await calls.getGifs('paul');
    this.setState({
      gifs: gifs.data,
      mappedGifs: gifs.data.slice(start, end),
      loading: false
    });
    // this.renderGifs();
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  searchGifs = async e => {
    e.preventDefault();
    const { query, start, end, input } = this.state;
    this.setState({ start: 0, end: 6 });
    const gifs = await calls.getGifs(input);
    this.setState({
      gifs: gifs.data,
      mappedGifs: gifs.data.slice(start, end),
      loading: false,
      query: input,
      input: ''
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
    const { query, mappedGifs, searchResults, input } = this.state;
    return (
      <div className="gif-container" id="gifs">
        <h1 className="jify">{query ? query.toUpperCase() : 'PAUL'} LAND</h1>
        <form className="gif-form" onSubmit={this.searchGifs}>
          <input
            className="gif-input"
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Search Gifs"
          />
          <i className="fab fa-searchengin" onClick={this.searchGifs} />
        </form>
        {query && (
          <h4 className="search-results">
            Search results for: '<strong>{query}</strong>'
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
            {this.state.mappedGifs.map((gif, index) => {
              const url = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
              return (
                <img
                  key={`gif-${index}`}
                  className="gif-items"
                  src={url}
                  height="200"
                  width="200"
                />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Gifs;
