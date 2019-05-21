import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="container" styles={{ justifyContent: "center" }}>
        <footer className="footer">
          <span className="text-muted">
            Bajra &#169; {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    );
  }
}

export default Footer;
