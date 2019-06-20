import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes/Routes';
import ContactHeader from '../ContactHeader/ContactHeader';
import Audio from '../Audio/Audio';
import './App.css';
import AppTemplate from '../Template/Template';
// import Gifs from '../Gifs/Gifs';

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
        <AppTemplate className={opaque ? 'root-hide' : 'root-show'}>
          <ContactHeader contact={contact} opaque={opaque} />
          <Routes />
          <Audio />
        </AppTemplate>
      </Router>
    );
  }
}

export default App;
