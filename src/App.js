import React, { Component } from "react";
import "./App.css";
import wands from "./wands";
import Wandslist from "./Wandslist";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid container">
        <div className="jumbotron mm">
          <div className="row">
            <div className="content col-12">
              <Wandslist wands={wands} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
