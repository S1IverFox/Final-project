import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col, FormControl } from 'react-bootstrap';
import CaseFetches from '../../fetches/CaseFetches.jsx';

class AddCases extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    CaseFetches.addCase(e.target)
      .then(() => {
        this.props.refresh();
        alert('Заявление добавлено!');
      })
      .then(() => e.target.reset());
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Заявление
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group controlId="licenseNumber" as={Col}>
                <Form.Label>Лицензионный номер</Form.Label>
                <Form.Control
                  type="text"
                  name="licenseNumber"
                  required
                  placeholder="Лицензионный номер"
                />
              </Form.Group>
              <Form.Group controlId="ownerFullName" as={Col}>
                <Form.Label>Имя владельца</Form.Label>
                <Form.Control
                  type="text"
                  name="ownerFullName"
                  required
                  placeholder="Имя владельца"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="color" as={Col}>
                <Form.Label>Цвет велосипеда</Form.Label>
                <FormControl as="select" name="color">
                  <option>Черный</option>
                  <option>Красный</option>
                  <option>Зеленый</option>
                  <option>Синий</option>
                </FormControl>
              </Form.Group>
              <Form.Group controlId="type" as={Col}>
                <Form.Label>Тип велосипеда</Form.Label>
                <FormControl as="select" name="bicycleType">
                  <option value="general">Прогулочный</option>
                  <option value="sport">Спортивный</option>
                </FormControl>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="createdAt" as={Col}>
                <Form.Label>Дата пропажи</Form.Label>
                <Form.Control
                  type="date"
                  name="caseDate"
                  required
                  defaultValue={new Date().toISOString().substr(0, 10)}
                />
              </Form.Group>
              <Form.Group controlId="officers" as={Col}>
                <Form.Label>Ответсвенный сотрудник</Form.Label>
                <FormControl as="select" name="officer">
                  <option value="">Выбрать</option>
                  {this.props.officers.map((officer) => (
                    <option key={officer._id} value={officer._id}>
                      {officer.firstName + ' ' + officer.lastName}
                    </option>
                  ))}
                </FormControl>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="description">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Описание"
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" variant="outline-success">
                Добавить
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

export default AddCases;
