import React, { Component } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import ReportFetches from '../../fetches/ReportFetches.jsx';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officers: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    ReportFetches.addReport(e.target)
      .then(() => {
        alert('Заявление добавлено!');
      })
      .then(() => e.target.reset());
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#fff3e1e7',
          padding: '50px',
          borderRadius: '5px',
        }}
      >
        <h3 style={{ marginBottom: '2rem' }}>Заявление</h3>
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
            <Form.Group as={Col}>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="clientId"
                placeholder="ID"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="color" as={Col}>
              <Form.Label>Цвет велосипеда</Form.Label>
              <Form.Control as="select" name="color">
                <option>Черный</option>
                <option>Красный</option>
                <option>Зеленый</option>
                <option>Синий</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="type" as={Col}>
              <Form.Label>Тип велосипеда</Form.Label>
              <Form.Control as="select" name="bicycleType">
                <option value="general">Прогулочный</option>
                <option value="sport">Спортивный</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="ownerFullName" as={Col}>
              <Form.Label>Имя владельца</Form.Label>
              <Form.Control
                type="text"
                name="ownerFullName"
                required
                placeholder="Имя владельца"
              />
            </Form.Group>
            <Form.Group controlId="createdAt" as={Col}>
              <Form.Label>Дата пропажи</Form.Label>
              <Form.Control
                type="date"
                name="caseDate"
                required
                defaultValue={new Date().toISOString().substr(0, 10)}
              />
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
            <Button
              type="submit"
              variant="outline-success"
              style={{ marginTop: '1.5rem' }}
            >
              Добавить
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Report;
