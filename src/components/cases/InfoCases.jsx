import React, { Component } from 'react';
import { Modal, Row, Form, Col, Table } from 'react-bootstrap';
import Converters from './Converters.jsx';

class Info extends Component {
  constructor(props) {
    super(props);
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
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Info;
