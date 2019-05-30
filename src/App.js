import React, { Component } from "react";
// import logo from "./logo.svg";
import { Router, Switch, Route } from "react-router-dom";
// import store from "./store";
import history from "./config/history";

import "./App.css";

import Home from "./pages/Home";
import HelloWorld from "./pages/HelloWorld";
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home/" component={HelloWorld} />
        </Switch>
      </Router>
    );
  }
}

export default App;
