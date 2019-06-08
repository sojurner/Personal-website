import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from '../Projects/Projects';
import JumboMumbo from '../JumboMumbo/JumboMumbo';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Header from '../Header/Header';
import Audio from '../Audio/Audio';
import About from '../AboutPage/AboutPage';

// import Gifs from '../Gifs/Gifs';
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
            <Header />
            <Contact contact={contact} />
          </div>
          <Route exact path="/" component={JumboMumbo} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Audio />
        </div>
      </Router>
    );
  }
}

export default App;
