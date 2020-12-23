import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';

class EditCases extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const casesid = this.props.casesid;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/cases/' + casesid, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        licenseNumber: e.target.licenseNumber.value,
        color: e.target.color.value,
        ownerFullName: e.target.ownerFullName.value,
        status: e.target.status.value,
        // createdAt: e.target.createdAt.value,
        resolution: e.target.resolution.value,
      }),
    })
      .then((response) => response.json())
      .then()
      .then(() => {
        alert('succses');
      });
  }
  handleChange(e) {
    const result = document.querySelector('.result');
    if (e.target.value == 'Done') {
      result.style.display = 'block';
      result.setAttribute('reqiured', '');
    } else {
      result.style.display = 'none';
    }
    console.log(e.target.value);
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
            Edit Cases
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>license Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="licenseNumber"
                    required
                    defaultValue={this.props.caseslicensenumber}
                    placeholder="licenseNumber"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>color</Form.Label>
                  <select name="color" defaultValue={this.props.casescolor}>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="ownerFullName"
                    required
                    defaultValue={this.props.casesownerfullname}
                    placeholder="ownerFullName"
                  />
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label>createdAt</Form.Label>
                  <Form.Control
                    type="date"
                    name="createdAt"
                    required
                    defaultValue={Date.now}
                    disabled
                  />
                </Form.Group> */}

                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <select
                    onChange={this.handleChange}
                    name="status"
                    defaultValue={this.props.casesstatus}
                  >
                    <option value="New">New</option>
                    <option value="In progress">In progress</option>
                    <option className="done" value="Done">
                      Done
                    </option>
                  </select>
                </Form.Group>
                <Form.Group className="result" style={{ display: 'none' }}>
                  <Form.Label>Resolution</Form.Label>
                  <input
                    name="resolution"
                    placeholder="resolution"
                    // required
                    defaultValue={this.props.casesresolutoin}
                  ></input>
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

export default EditCases;