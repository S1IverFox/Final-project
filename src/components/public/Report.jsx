import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
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
      <div>
        <h3>Заявление</h3>
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
            <Form.Control as="select" name="color">
              <option>Черный</option>
              <option>Красный</option>
              <option>Зеленый</option>
              <option>Синий</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Тип велосипеда</Form.Label>
            <Form.Control as="select" name="bicycleType">
              <option value="general">Прогулочный</option>
              <option value="sport">Спортивный</option>
            </Form.Control>
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
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="clientId"
              placeholder="ID"
              required
            />
          </Form.Group>

          <Form.Group>
            <Button type="submit">Добавить</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Report;
