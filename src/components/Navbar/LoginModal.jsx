import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
class LoginModal extends Component {
  state = {};
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form styles={{ justifyContent: "center" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModal;
