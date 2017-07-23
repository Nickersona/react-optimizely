import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ABTest from './components/ABTest';


// This AB test App assumes that the optimizely.json contains a running experiment called
// 'logoTest' with two variations called `withLogo`,  and `noLogo`.  The ABTest component
// automatically hooks up to a running test 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.clickBuy = this.clickBuy.bind(this);
  }

  clickBuy() {
    window['optimizely'].push({
      type: "event",
      eventName: "visualClickBuy"
    });
  }
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.clickBuy()}>Buy!</button>
        <strong>{this.state.count}</strong>
        <button onClick={ () => this.setState({count: this.state.count+1}) }>Increment</button>
      </div>
    );

  }
}

export default App;
