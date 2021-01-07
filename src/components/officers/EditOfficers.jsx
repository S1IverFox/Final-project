import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import OfficerFetches from '../../fetches/OfficerFetches.jsx';

class EditOffecer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const officerId = this.props.officerid;
    OfficerFetches.editOfficer(e.target, officerId)
      .then(() => {
        this.props.refresh();
        alert('succses');
      })
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
            Edit Officer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    defaultValue={this.props.officeremail}
                    placeholder="email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>first Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    required
                    defaultValue={this.props.officerfirstname}
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    required
                    defaultValue={this.props.officerlastname}
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    defaultValue={this.props.officerpassword}
                    placeholder="password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>repassword</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    defaultValue={this.props.officerpassword}
                    placeholder="repassword"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Approved</Form.Label>
                  <input
                    name="approved"
                    type="checkbox"
                    defaultChecked={this.props.officerapproved}
                  />
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
