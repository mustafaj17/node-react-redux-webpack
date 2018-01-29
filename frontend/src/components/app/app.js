import React, { Component } from 'react';
import icon from '../../assets/icon.png'
import './app.sass';

class App extends Component {
  render() {

    return (
      <div className="app">
          HELLO WORLD!
          <img src={icon} alt=""/>
      </div>
    );
  }
}

export default App;
