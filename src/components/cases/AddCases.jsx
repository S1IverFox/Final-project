import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
// import { render } from 'react-dom';

class AddCases extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const token = localStorage.token;

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/cases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        licenseNumber: e.target.licenseNumber.value,
        color: e.target.color.value,
        ownerFullName: e.target.ownerFullName.value,
        createdAt: e.target.createdAt.value,
        status: e.target.status.value,
        // approved: e.target.approved.value,
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
          <Modal.Title id="contained-modal-title-vcenter">Add Case</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="licenseNumber">
                  <Form.Label>licenseNumber</Form.Label>
                  <Form.Control
                    type="text"
                    name="licenseNumber"
                    required
                    placeholder="licenseNumber"
                  />
                </Form.Group>
                <Form.Group controlId="color">
                  <Form.Label>color</Form.Label>
                  <select name="color">
                    <option>Black</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="ownerFullName">
                  <Form.Label>ownerFullName</Form.Label>
                  <Form.Control
                    type="text"
                    name="ownerFullName"
                    required
                    placeholder="ownerFullName"
                  />
                </Form.Group>
                <Form.Group controlId="createdAt">
                  <Form.Label>createdAt</Form.Label>
                  <Form.Control type="date" name="createdAt" required />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <select name="status">
                    <option>new</option>
                    <option>in_progress</option>
                    <option>done</option>
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

export default AddCases;
