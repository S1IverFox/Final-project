import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import OfficerFetches from '../../fetches/OfficerFetches.jsx';

class AddOf extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    OfficerFetches.addOfficer(e.target)
      .then(() => {
        this.props.refresh();
        alert('succses');
      })
      .then(() => e.target.reset())
      .catch((err) => alert(err));
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Officer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                  />
                </Form.Group>
                <Form.Group controlId="firstName">
                  <Form.Label>first Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    required
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>repassword</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="repassword"
                  />
                </Form.Group>
                <Form.Group controlId="approved">
                  <Form.Label>Approved</Form.Label>
                  <input
                    name="approved"
                    type="checkbox"
                    defaultChecked={this.props.officerapproved}
                  />
                </Form.Group>

                <Form.Group>
                  <Button type="submit">Add</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddOf;
