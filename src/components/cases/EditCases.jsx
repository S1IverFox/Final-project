import React, { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import CaseFetches from '../../fetches/CaseFetches.jsx';

class EditCases extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const caseId = this.props.casesid;
    if (
      e.target.status.value == 'done' &&
      e.target.resolution.value.length == 0
    ) {
      alert('Пожалуйста, введите завершающий комментарий!');
    } else {
      CaseFetches.editCase(e.target, caseId).then(() => {
        this.props.refresh();
        alert('Изменения сохранены!');
      });
    }
  };

  handleChange = (e) => {
    const result = document.querySelector('.result');
    if (e.target.value == 'done') {
      result.style.display = 'block';
      result.setAttribute('reqiured', '');
    } else {
      result.style.display = 'none';
    }
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Редактировать
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Лицензионный номер</Form.Label>
                <Form.Control
                  type="text"
                  name="licenseNumber"
                  required
                  defaultValue={this.props.caseslicensenumber}
                  placeholder="Лицензионный номер"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Имя владельца</Form.Label>
                <Form.Control
                  type="text"
                  name="ownerFullName"
                  required
                  defaultValue={this.props.casesownerfullname}
                  placeholder="Имя владельца"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Цвет велосипеда</Form.Label>
                <Form.Control
                  as="select"
                  name="color"
                  defaultValue={this.props.casescolor}
                >
                  <option>Черный</option>
                  <option>Красный</option>
                  <option>Зеленый</option>
                  <option>Синий</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="type" as={Col}>
                <Form.Label>Тип велосипеда</Form.Label>
                <Form.Control
                  as="select"
                  name="bicycleType"
                  defaultValue={this.props.casestype}
                >
                  <option value="general">Прогулочный</option>
                  <option value="sport">Спортивный</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Дата пропажи</Form.Label>
                <Form.Control
                  type="date"
                  name="caseDate"
                  defaultValue={new Date().toISOString().substr(0, 10)}
                />
              </Form.Group>

              <Form.Group controlId="officers" as={Col}>
                <Form.Label>Ответсвенный сотрудник</Form.Label>
                <Form.Control
                  as="select"
                  name="officer"
                  defaultValue={this.props.casesofficer}
                >
                  <option value="">Выбрать</option>
                  {this.props.officers.map((officer) => (
                    <option key={officer._id} value={officer._id}>
                      {officer.firstName + ' ' + officer.lastName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="description" as={Col}>
                <Form.Label>Описание</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Описание"
                  defaultValue={this.props.casesdescription}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Статус</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.handleChange}
                  name="status"
                  defaultValue={this.props.casesstatus}
                >
                  <option value="new">Новое</option>
                  <option value="in_progress">В процессе</option>
                  <option className="done" value="done">
                    Выполнено
                  </option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group className="result" style={{ display: 'none' }}>
              <Form.Label>Завершающий комментарий</Form.Label>
              <Form.Control
                type="text"
                name="resolution"
                placeholder="Завершающий комментарий"
                defaultValue={this.props.casesresolution}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" variant="outline-success">
                Сохранить
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} variant="outline-danger">
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditCases;
