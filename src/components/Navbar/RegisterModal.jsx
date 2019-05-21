import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { registerRequest } from "../../actions";

class RegisterModal extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    c_password: ""
  };

  changeName(event) {
    this.setState({ name: event.target.value });
    console.log("name", this.state.name);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  changeCpassword(event) {
    this.setState({ c_password: event.target.value });
  }

  submitForm = () => {
    this.props.registerRequest(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.c_password
    );
    console.log("submit", this.props);
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.changeName.bind(this)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.changeEmail.bind(this)}
                />
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group> */}
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.changePassword.bind(this)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCPassword">
                {/* <Form.Label>Phone</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.c_password}
                  onChange={this.changeCpassword.bind(this)}
                />
              </Form.Group>
            </Form.Row>
            <Button
              variant="dark"
              type="submit"
              onClick={event => {
                this.submitForm(event);
              }}
            >
              Register
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.bajra.registration
  };
};
export default connect(
  mapStateToProps,
  { registerRequest }
)(RegisterModal);
