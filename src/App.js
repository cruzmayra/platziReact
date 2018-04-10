import React, { Component } from 'react';
import logo from './logo.svg';
import Video from './components/Video';
import Button from 'material-ui/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Video />


          <Button variant="raised" color="primary">
            Reproducir
          </Button>


      </div>
    );
  }
}

export default App;