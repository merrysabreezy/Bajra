import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import store from "./store";

import "./App.css";

import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
