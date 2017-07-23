import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ABTest from './components/ABTest';

const WithLogoVariation = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={props.telemetryEvents.clickedBuy()}>Buy!</button>
    </div>
  );
};

const NoLogoVariation = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={props.telemetryEvents.clickedBuy()}>Buy!</button>
    </div>
  );
};


class App extends Component {
  render() {
    // Variations corespond to variations in the Optimizely test
    const variations = {
      withLogo: <WithLogoVariation />,
      noLogo: <NoLogoVariation />,
    }
    return <ABTest name="logoTest" variations={variations} />

  }
}

export default App;
