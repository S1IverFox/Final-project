import React, { Component } from 'react';
import { Modal, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import Converters from './Converters.jsx';
import EditCases from './EditCases.jsx';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalShow: false,
    };
  }

  convertDate(createDateStr) {
    const createdDate = new Date(createDateStr);
    return `${createdDate.getDate()}-${
      createdDate.getMonth() + 1
    }-${createdDate.getFullYear()}`;
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
      casesdescription,
      officername,
      casestype,
      casesupdatedat,
      casesdate,
      officers,
      casesofficer,
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
              <Col sm={1}>
                <Table>
                  <thead>
                    <tr>
                      <th>License number</th>
                      <th>Full Name </th>
                      <th>Color</th>
                      <th>Date</th>
                      <th>Officer</th>
                      <th>Bicycle type</th>
                      <th>Description</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Status</th>
                      <th>Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={casesid}>
                      <td>{caseslicensenumber}</td>
                      <td>{casesownerfullname}</td>
                      <td>{casescolor}</td>
                      <td>{this.convertDate(casesdate)}</td>
                      <td>{officername}</td>
                      <td>{casestype}</td>
                      <td>{casesdescription}</td>
                      <td>{this.convertDate(casescreatedat)}</td>
                      <td>{this.convertDate(casesupdatedat)}</td>
                      <td>{Converters.toReadableStatus(casesstatus)}</td>
                      <td>{casesresolution}</td>
                      <td>
                        <ButtonToolbar>
                          <Button
                            onClick={() =>
                              this.setState({
                                editModalShow: true,
                                casesid: casesid,
                                casesownerfullname: casesownerfullname,
                                caseslicensenumber: caseslicensenumber,
                                casescolor: casescolor,
                                casescreatedat: casescreatedat,
                                casesupdatedat: casesupdatedat,
                                casesdate: casesdate,
                                casesstatus: casesstatus,
                                casesdescription: casesdescription,
                                casesofficer: casesofficer,
                                casestype: casestype,
                                casesresolution: casesresolution,
                              })
                            }
                          >
                            Edit
                          </Button>
                        </ButtonToolbar>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <EditCases
          show={this.state.editModalShow}
          onHide={editModalClose}
          casesid={casesid}
          caseslicensenumber={caseslicensenumber}
          casesownerfullname={casesownerfullname}
          casescolor={casescolor}
          casescreatedat={casescreatedat}
          casesstatus={casesstatus}
          casesresolution={casesresolution}
          refresh={this.refreshList}
          officers={officers}
          casesdescription={casesdescription}
          casesofficer={casesofficer}
          casestype={casestype}
          officers={officers}
          refresh={this.props.refresh}
        />
      </div>
    );
  }
}

export default Info;
