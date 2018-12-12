import React, { Component } from 'react';
import './App.css';
import Progress from './Progress';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Progress steps={['Un', 'Deux', 'Trois', 'Quatre']} />
      </div>
    );
  }
}

export default App;
