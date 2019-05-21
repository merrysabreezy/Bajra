import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "../css/Jumbotron.css";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">{this.props.title}</h1>
        <p className="lead">{this.props.subtitle}</p>
      </Jumbotron>
      // <div className="container">
      //   <div className="jumbotron jumbotron-fluid">
      //     <h1 className="display-3">{this.props.title}</h1>
      //     <p className="lead">{this.props.subtitle}</p>
      //   </div>
      // </div>
    );
  }
}

export default Jumbo;
