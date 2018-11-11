import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Home } from '../Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;
