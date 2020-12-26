import React, { Component } from 'react';
import {
  Modal,
  Button,
  Row,
  Form,
  Col,
  Table,
  ButtonToolbar,
} from 'react-bootstrap';
import EditOfficers from './EditOfficers.jsx';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalShow: false,
    };
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
      officerid,
      officerfirstname,
      officerlastname,
      officeremail,
      officerpassword,
      officerapproved,
    } = this.props;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Table>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>First Name </th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Approved</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={officerid}>
                        <td>{officerid}</td>
                        <td>{officerfirstname}</td>
                        <td>{officerlastname}</td>
                        <td>{officeremail}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={officerapproved}
                            disabled
                          ></input>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button
                              onClick={() => {
                                this.setState({
                                  editModalShow: true,
                                  officerid: officerid,
                                  officeremail: officeremail,
                                  officerfirstname: officerfirstname,
                                  officerlastname: officerlastname,
                                  officerpassword: officerpassword,
                                  officerapproved: officerapproved,
                                });
                              }}
                            >
                              Edit
                            </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </Table>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <EditOfficers
          show={this.state.editModalShow}
          onHide={editModalClose}
          officerid={officerid}
          officeremail={officeremail}
          officerfirstname={officerfirstname}
          officerlastname={officerlastname}
          officerpassword={officerpassword}
          officerapproved={officerapproved}
          refresh={this.props.refresh}
        />
      </div>
    );
  }
}

export default Info;
