import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./components/wheel";

import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.places = ["Jack C", "Jack F", "Aaron", "Dan", "Matt", "Martin", "Ben", "Sam", "Steve"];
  }

  render() {
    return (
      <div className="App">
        <h1>Who should lead the next stand-up?</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
