import React, { Component } from 'react';
import logo from './logo.svg';
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
        <button onClick={this.handleErrorAsync}>Async Error</button>
        <button onClick={this.handleErrorSync}>Sync Error</button>
      </div>
    );
  }

  handleErrorAsync = async () => {
    setTimeout(callTheTest, 1000);
  }

  handleErrorSync = () => {
    setTimeout(callTheTest, 1000);
  }
}

const callTheTest = () => {
  throw new Error('My Custom Sync Error');
}

export default App;
