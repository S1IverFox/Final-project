import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
// import { render } from 'react-dom';

class AddCases extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const token = localStorage.token;
    const createDate = new Date().toISOString();
    const off = e.target.officer.value == '' ? null : e.target.officer.value;

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
        createdAt: createDate,
        updateAt: createDate,
        date: e.target.caseDate.value,
        status: 'new',
        type: e.target.bicycleType.value,
        officer: off,
        description: e.target.description.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.props.refresh();
        alert('succses');
      });
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
                <Form.Group controlId="type">
                  <Form.Label>Bicycle type</Form.Label>
                  <select name="bicycleType">
                    <option value="general">General</option>
                    <option value="sport">Sport</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="officers">
                  <Form.Label>Officer</Form.Label>
                  <select name="officer">
                    <option value="">Выбрать</option>
                    {this.props.officers.map((officer) => (
                      <option key={officer._id} value={officer._id}>
                        {officer.firstName + ' ' + officer.lastName}
                      </option>
                    ))}
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
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="description"
                  />
                </Form.Group>
                <Form.Group controlId="createdAt">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="caseDate"
                    required
                    defaultValue={new Date().toISOString().substr(0, 10)}
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

export default AddCases;
