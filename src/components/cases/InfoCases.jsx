import React, { Component } from 'react';
import { Modal, Col, Button, ButtonToolbar, Form } from 'react-bootstrap';
import Converters from './Converters.jsx';
import EditCases from './EditCases.jsx';

class InfoCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalShow: false,
    };
  }

  convertDate(createDateStr) {
    const createdDate = new Date(createDateStr);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return createdDate.toLocaleDateString('ru-RU', options);
  }

  showResolution = () => {
    const comment = document.querySelector('.comment');
    if (this.props.casesresolution != '') {
      comment.style.display = 'block';
    }
  };

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
            <Modal.Title id="contained-modal-title-vcenter">
              Детальная страница велосипеда
            </Modal.Title>
          </Modal.Header>
          <Modal.Body onMouseEnter={this.showResolution}>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Лицензионный номер</Form.Label>
                  <Form.Control
                    type="text"
                    name="licenseNumber"
                    required
                    disabled
                    defaultValue={caseslicensenumber}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Имя владельца</Form.Label>
                  <Form.Control
                    type="text"
                    name="ownerFullName"
                    required
                    disabled
                    defaultValue={casesownerfullname}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Цвет велосипеда</Form.Label>
                  <Form.Control
                    type="text"
                    name="color"
                    disabled
                    defaultValue={casescolor}
                  />
                </Form.Group>
                <Form.Group controlId="type" as={Col}>
                  <Form.Label>Тип велосипеда</Form.Label>
                  <Form.Control
                    type="text"
                    name="bicycleType"
                    disabled
                    defaultValue={casestype}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Дата пропажи</Form.Label>
                  <Form.Control
                    type="text"
                    name="caseDate"
                    disabled
                    defaultValue={this.convertDate(casesdate)}
                  />
                </Form.Group>
                <Form.Group controlId="officers" as={Col}>
                  <Form.Label>Ответсвенный сотрудник</Form.Label>
                  <Form.Control
                    as="select"
                    name="officer"
                    disabled
                    defaultValue={casesofficer}
                  >
                    {officers.map((officer) => (
                      <option key={officer._id} value={officer._id}>
                        {officer.firstName + ' ' + officer.lastName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="description">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Описание"
                  disabled
                  defaultValue={casesdescription}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Дата подачи заявления</Form.Label>
                  <Form.Control
                    type="text"
                    name="caseCreatedAt"
                    disabled
                    defaultValue={this.convertDate(casescreatedat)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Дата редактирования</Form.Label>
                  <Form.Control
                    type="text"
                    name="caseUpdatedAt"
                    disabled
                    defaultValue={this.convertDate(casesupdatedat)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Статус</Form.Label>
                <Form.Control
                  type="text"
                  name="status"
                  disabled
                  defaultValue={Converters.toReadableStatus(casesstatus)}
                />
              </Form.Group>
              <Form.Group className="comment" style={{ display: 'none' }}>
                <Form.Label>Завершающий комментарий</Form.Label>
                <Form.Control
                  type="text"
                  name="resolution"
                  placeholder="Завершающий комментарий"
                  defaultValue={casesresolution}
                  disabled
                />
              </Form.Group>

              <Form.Group>
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
                    variant="outline-primary"
                  >
                    Редактировать
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
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
          refresh={this.props.refresh}
        />
      </div>
    );
  }
}

export default InfoCases;
