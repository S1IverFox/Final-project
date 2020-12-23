import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('http://84.201.129.203:8888/api/public/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        licenseNumber: e.target.licenseNumber.value,
        color: e.target.color.value,
        ownerFullName: e.target.ownerFullName.value,
        createdAt: e.target.createdAt.value,
        clientId: 'a9432bbe73645c1825a4c426db59f47d',
        status: 'New',
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert('succses');
      });
  }

  render() {
    return (
      <div>
        <h3>Report</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="licenseNumber">
            <Form.Label>License Number</Form.Label>
            <Form.Control
              type="text"
              name="licenseNumber"
              required
              placeholder="licenseNumber"
            />
          </Form.Group>
          <label>Color</label>
          <select name="color">
            <option>Black</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
          </select>
          <Form.Group controlId="ownerFullName">
            <Form.Label>Owner Full Name</Form.Label>
            <Form.Control
              type="text"
              name="ownerFullName"
              required
              placeholder="ownerFullName"
            />
          </Form.Group>
          <Form.Group controlId="createdAt">
            <Form.Label>CreatedAt</Form.Label>
            <Form.Control type="date" name="createdAt" required />
          </Form.Group>

          <Form.Group>
            <Button type="submit">Add</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Report;
