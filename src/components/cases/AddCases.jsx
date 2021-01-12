import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col, FormControl } from 'react-bootstrap';
import CaseFetches from '../../fetches/CaseFetches.jsx';

class AddCases extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    CaseFetches.addCase(e.target)
      .then(() => {
        this.props.refresh();
        alert('Заявление добавлено!');
      })
      .then(() => e.target.reset());
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Заявление
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="licenseNumber">
                  <Form.Label>Лицензионный номер</Form.Label>
                  <Form.Control
                    type="text"
                    name="licenseNumber"
                    required
                    placeholder="Лицензионный номер"
                  />
                </Form.Group>
                <Form.Group controlId="color">
                  <Form.Label>Цвет велосипеда</Form.Label>
                  <FormControl as="select" name="color">
                    <option>Черный</option>
                    <option>Красный</option>
                    <option>Зеленый</option>
                    <option>Синий</option>
                  </FormControl>
                </Form.Group>
                <Form.Group controlId="type">
                  <Form.Label>Тип велосипеда</Form.Label>
                  <FormControl as="select" name="bicycleType">
                    <option value="general">Прогулочный</option>
                    <option value="sport">Спортивный</option>
                  </FormControl>
                </Form.Group>
                <Form.Group controlId="officers">
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
                <Form.Group controlId="ownerFullName">
                  <Form.Label>Имя владельца</Form.Label>
                  <Form.Control
                    type="text"
                    name="ownerFullName"
                    required
                    placeholder="Имя владельца"
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Описание</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Описание"
                  />
                </Form.Group>
                <Form.Group controlId="createdAt">
                  <Form.Label>Дата пропажи</Form.Label>
                  <Form.Control
                    type="date"
                    name="caseDate"
                    required
                    defaultValue={new Date().toISOString().substr(0, 10)}
                  />
                </Form.Group>

                <Form.Group>
                  <Button type="submit">Добавить</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddCases;
