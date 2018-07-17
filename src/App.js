import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    cusip: "88160R101"
  };

  _publishCusip = cusip => {
    // use openfin api
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the CUSIP publishing app</h1>
        </header>
        <span>Click the button below to publish TSLA's CUSIP</span>
        <br />
        <button onClick={this._publishCusip}>Publish CUSIP</button>
      </div>
    );
  }
}

export default App;
