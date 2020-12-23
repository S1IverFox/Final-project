import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col, Table } from 'react-bootstrap';

class Info extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const token = localStorage.token;
    const officerid = this.props.officerid;

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/officers' + officerid, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ officers: data });
      });
  }

  render() {
    const {
      officers,
      officerid,
      officerfirstname,
      officerlastname,
      officeremail,
      // officerapproved,
    } = this.props;
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          {/* <Modal.Body> */}
          {/* <Row>
              <Col sm={1}> */}
          <Form onSubmit={this.handleSubmit}>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>First Name </th>
                  <th>Last Name</th>
                  <th>Email</th>
                  {/* <th>Approved</th> */}
                </tr>
              </thead>
              <tbody>
                <tr key={officerid}>
                  <td>{officerid}</td>
                  <td>{officerfirstname}</td>
                  <td>{officerlastname}</td>
                  <td>{officeremail}</td>
                  {/* <td>{officerapproved}</td> */}
                </tr>
              </tbody>
            </Table>
          </Form>
          {/* </Col>
            </Row> */}
          {/* </Modal.Body> */}
        </Modal>
      </div>
    );
  }
}

export default Info;
