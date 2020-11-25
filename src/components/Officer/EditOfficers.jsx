import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';

class EditOffecer extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/officers/:', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        state: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then(
        (result) => {
          alert('seccses');
        },
        (error) => {
          alert('faild');
        }
      );
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
            Edit Officer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="_id">
                  <Form.Label>_id</Form.Label>
                  <Form.Control
                    type="text"
                    name="_id"
                    required
                    disabled
                    defaultValue={this.props.officerid}
                    placeholder="id"
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    defaultValue={this.props.officeremail}
                    placeholder="email"
                  />
                </Form.Group>
                <Form.Group controlId="firstName">
                  <Form.Label>first Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    required
                    defaultValue={this.props.officerfirstname}
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    required
                    defaultValue={this.props.officerlastname}
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    defaultValue={this.props.officerpassword}
                    placeholder="password"
                  />
                </Form.Group>
                <Form.Group controlId="approved">
                  <Form.Label>approved</Form.Label>
                  <Form.Control type="checkbox" name="approved" />
                </Form.Group>

                <Form.Group>
                  <Button type="submit">Update</Button>
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

export default EditOffecer;
