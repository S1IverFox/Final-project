import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import CaseFetches from '../../fetches/CaseFetches.jsx';

class AddCases extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    CaseFetches.addCase(e.target)
      .then(() => {
        this.props.refresh();
        alert('succses');
      })
      .then(() => e.target.reset());
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
