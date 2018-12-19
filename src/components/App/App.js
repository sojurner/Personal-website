import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import JumboMumbo from '../JumboMumbo/JumboMumbo';

import { Home } from '../Home/Home';
import Resume from '../Resume/Resume';
import Gifs from '../Gifs/Gifs';
import { Footer } from '../Footer/Footer';
import { getWeather } from '../../utilities/apiCalls';
import './App.css';

class App extends Component {
  state = {
    weather: null,
    contactDisplay: false
  };

  // componentDidMount() {
  //   this.fetchWeather();
  // }

  // fetchWeather = () => {
  //   navigator.geolocation.getCurrentPosition(async location => {
  //     const { latitude, longitude } = location.coords;
  //     const weather = await getWeather(latitude, longitude);
  //     await this.setState({ weather });
  //   });
  // };

  toggleContact = () => {
    this.setState({ contactDisplay: !this.state.contactDisplay });
  };

  render() {
    return (
      <Router>
        <div className="root">
          {/* <ReactAudioPlayer
            src={require(`../../assets/music/Ocean-17.mp3`)}
            autoPlay={true}
            controls={true}
            loop={true}
          /> */}
          <div className="header-container">
            <Navigation />
            <Home
              toggleContact={this.toggleContact}
              contactDisplay={this.state.contactDisplay}
            />
            {/* {this.state.weather && <Footer weather={this.state.weather} />} */}
          </div>
          <Route exact path="/" component={JumboMumbo} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
