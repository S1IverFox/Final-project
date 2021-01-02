import React, { Component } from 'react';
import { Modal, Button, Row, Col, Table, ButtonToolbar } from 'react-bootstrap';
import EditOfficers from './EditOfficers.jsx';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalShow: false,
    };
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
