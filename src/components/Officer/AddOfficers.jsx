import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
// import { render } from 'react-dom';

class AddOf extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const token = localStorage.token;

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/officers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: e.target.email.value,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        password: e.target.password.value,
        approved: e.target.approved.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert('succses');
      });
  }

  render() {
    return (
      <Modal
        {...this.props}
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
                    type="text"
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
                <Form.Group controlId="password">
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                  />
                </Form.Group>
                <Form.Group controlId="approved">
                  <Form.Label>Approved</Form.Label>
                  <select name="approved">
                    <option value="false">false</option>
                    <option value="true">true</option>
                  </select>
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
