import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import JumboMumbo from '../JumboMumbo/JumboMumbo';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
// import Gifs from '../Gifs/Gifs';
// import { getWeather } from '../../utilities/apiCalls';
import './App.css';

class App extends Component {
  state = {
    opaque: true,
    weather: null,
    contact: false
  };

  componentDidMount() {
    const opaque = false;
    setTimeout(() => {
      this.setState({ opaque });
      this.delayContact();
    }, 500);
  }

  delayContact = () => {
    setTimeout(() => {
      this.setState({ contact: true });
    }, 1500);
  };

  // fetchWeather = () => {
  //   navigator.geolocation.getCurrentPosition(async location => {
  //     const { latitude, longitude } = location.coords;
  //     const weather = await getWeather(latitude, longitude);
  //     await this.setState({ weather });
  //   });
  // };

  render() {
    const { opaque, contact } = this.state;
    return (
      <Router>
        <div className={opaque ? 'root-hide' : 'root-show'}>
          <div
            className={
              opaque ? 'header-container-hide' : 'header-container-show'
            }
          >
            <Navigation />
            <Contact contact={contact} />
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
