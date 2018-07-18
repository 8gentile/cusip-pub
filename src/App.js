import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    cusip: "88160R101"
  };

  componentDidMount() {
    window.fin &&
      window.fin.desktop.InterApplicationBus.addSubscribeListener(
        (uuid, topic) =>
          alert("The application " + uuid + "just subscribed to " + topic)
      );
  }

  _publishCusip = () => {
    if (window.fin) {
      console.warn("Attempting to send cusip....");
      window.fin.desktop.InterApplicationBus.send(
        "Money.Net-sub",
        "Money.Net-sub",
        "cusip-pub-test",
        this.state.cusip,
        () => alert("CUSIP sent!")
      );
    } else {
      alert("You are NOT currently using OpenFin.");
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the CUSIP publishing app</h1>
        </header>
        <span>Click to publish TSLA's CUSIP</span>
        <br />
        <button onClick={this._publishCusip}>Publish CUSIP</button>
      </div>
    );
  }
}

export default App;
