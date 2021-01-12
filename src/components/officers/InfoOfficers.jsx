import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, ButtonToolbar } from 'react-bootstrap';
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
            <Modal.Title id="contained-modal-title-vcenter">
              Детальная страница сотрудника
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12}>
                <Form>
                  <Form.Group controlId="id">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="officerid"
                      required
                      placeholder="ID"
                      defaultValue={officerid}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="firstName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      required
                      placeholder="Имя"
                      defaultValue={officerfirstname}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="lastName">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      required
                      placeholder="Фамилия"
                      defaultValue={officerlastname}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      placeholder="email"
                      defaultValue={officeremail}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="approved">
                    <Form.Switch
                      label="Одобрить"
                      name="approved"
                      defaultChecked={officerapproved}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group>
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
                        Редактировать
                      </Button>
                    </ButtonToolbar>
                  </Form.Group>
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
