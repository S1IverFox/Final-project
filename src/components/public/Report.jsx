import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReportFetches from '../../fetches/ReportFetches.jsx';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officers: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    ReportFetches.addReport(e.target)
      .then(() => {
        alert('succses');
      })
      .then(() => e.target.reset());
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
          <Form.Group controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control as="select" name="color">
              <option>Black</option>
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Bicycle type</Form.Label>
            <Form.Control as="select" name="bicycleType">
              <option value="general">General</option>
              <option value="sport">Sport</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="ownerFullName">
            <Form.Label>Owner Full Name</Form.Label>
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
      </div>
    );
  }
}

export default Report;
