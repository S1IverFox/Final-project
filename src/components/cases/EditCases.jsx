import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import CaseFetches from '../../fetches/CaseFetches.jsx';

class EditCases extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const caseId = this.props.casesid;
    if (
      e.target.status.value == 'done' &&
      e.target.resolution.value.length == 0
    ) {
      alert('Error! Status done but resolution is empty!');
    } else {
      CaseFetches.editCase(e.target, caseId).then(() => {
        this.props.refresh();
        alert('succses');
      });
    }
  }

  handleChange(e) {
    const result = document.querySelector('.result');
    if (e.target.value == 'done') {
      result.style.display = 'block';
      result.setAttribute('reqiured', '');
    } else {
      result.style.display = 'none';
    }
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
            Edit Cases
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>License Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="licenseNumber"
                    required
                    defaultValue={this.props.caseslicensenumber}
                    placeholder="licenseNumber"
                  />
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
                  <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <select name="color" defaultValue={this.props.casescolor}>
                      <option>Black</option>
                      <option>Red</option>
                      <option>Green</option>
                      <option>Blue</option>
                    </select>
                  </Form.Group>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="caseDate"
                    defaultValue={new Date().toISOString().substr(0, 10)}
                  />
                </Form.Group>
                <Form.Group controlId="officers">
                  <Form.Label>Officer</Form.Label>
                  <select name="officer" defaultValue={this.props.casesofficer}>
                    <option value="">Выбрать</option>
                    {this.props.officers.map((officer) => (
                      <option key={officer._id} value={officer._id}>
                        {officer.firstName + ' ' + officer.lastName}
                      </option>
                    ))}
                  </select>
                </Form.Group>
                <Form.Group controlId="type">
                  <Form.Label>Bicycle type</Form.Label>
                  <select
                    name="bicycleType"
                    defaultValue={this.props.casestype}
                  >
                    <option value="general">General</option>
                    <option value="sport">Sport</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="description"
                    defaultValue={this.props.casesdescription}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <select
                    onChange={this.handleChange}
                    name="status"
                    defaultValue={this.props.casesstatus}
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In progress</option>
                    <option className="done" value="done">
                      Done
                    </option>
                  </select>
                </Form.Group>
                <Form.Group className="result" style={{ display: 'none' }}>
                  <Form.Label>Resolution</Form.Label>
                  <input
                    name="resolution"
                    placeholder="resolution"
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
