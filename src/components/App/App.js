import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import { Home } from '../Home/Home';
import Resume from '../Resume/Resume';
import Gifs from '../Gifs/Gifs';
import { Footer } from '../Footer/Footer';
import { getWeather } from '../../utilities/apiCalls';
import './App.css';

class App extends Component {
  state = {
    weather: null
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = () => {
    navigator.geolocation.getCurrentPosition(async location => {
      const { latitude, longitude } = location.coords;
      const weather = await getWeather(latitude, longitude);
      await this.setState({ weather });
    });
  };

  render() {
    return (
      <Router>
        <div className="root">
          <ReactAudioPlayer
            src={require(`../../assets/music/Ocean-17.mp3`)}
            autoPlay={true}
            controls={true}
            loop={true}
          />
          <div className="scroll-snap" id="projects">
            <Navigation />
            <Home />
            {this.state.weather && <Footer weather={this.state.weather} />}
          </div>
          <Resume />
          {/* <Gifs /> */}
        </div>
      </Router>
    );
  }
}

export default App;
