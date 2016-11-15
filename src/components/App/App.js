import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TwitterFeedContainer from '../../containers/TwitterFeedContainer/TwitterFeedContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React & Redux-Thunk Async Data Feed</h2>
        </div>
        <TwitterFeedContainer />
      </div>
    );
  }
}

export default App;
