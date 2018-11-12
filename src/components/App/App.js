import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Home } from '../Home/Home';
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
        <div>
          <Navigation />
          <Home />
          {this.state.weather && <Footer weather={this.state.weather} />}
        </div>
      </Router>
    );
  }
}

export default App;
