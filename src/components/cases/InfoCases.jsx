import React, { Component } from 'react';
import { Modal, Row, Form, Col, Table } from 'react-bootstrap';

class Info extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const token = localStorage.token;
    const casesid = this.props.casesid;

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/officers' + casesid, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ casess: data });
      });
  }

  convertDate(createDateStr) {
    const createdDate = new Date(createDateStr);
    return `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()}`;
  }

  render() {
    const {
      casesid,
      caseslicensenumber,
      casescolor,
      casesownerfullname,
      casesstatus,
      casescreatedat,
      casesresolution,
    } = this.props;
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={1}>
                <Form onSubmit={this.handleSubmit}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>License number</th>
                        <th>Full Name </th>
                        <th>Color</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Resolution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={casesid}>
                        <td>{casesid}</td>
                        <td>{caseslicensenumber}</td>
                        <td>{casesownerfullname}</td>
                        <td>{casescolor}</td>
                        <td>{this.convertDate(casescreatedat)}</td>
                        <td>{casesstatus}</td>
                        <td>{casesresolution}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Info;
