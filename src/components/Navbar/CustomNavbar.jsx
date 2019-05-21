import React, { Component } from "react";
import { Navbar, Nav, ButtonToolbar, Button } from "react-bootstrap";
// import "./css/Navbar.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalShow: false,
      registerModalShow: false
    };
  }
  render() {
    let loginModalClose = () => this.setState({ loginModalShow: false });
    let registerModalClose = () => this.setState({ registerModalShow: false });
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src="<%= asset_url('../images/bajra.png') %>"
            // src="../images/bajra.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          Bajra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ButtonToolbar>
              <Button
                variant="dark"
                onClick={() => this.setState({ loginModalShow: true })}
              >
                Login
              </Button>
              <LoginModal
                show={this.state.loginModalShow}
                onHide={loginModalClose}
              />
            </ButtonToolbar>
            <ButtonToolbar>
              <Button
                variant="dark"
                onClick={() => this.setState({ registerModalShow: true })}
              >
                Register
              </Button>
              <RegisterModal
                show={this.state.registerModalShow}
                onHide={registerModalClose}
              />
            </ButtonToolbar>
            {/* <Nav.Link href="#link">Register</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
