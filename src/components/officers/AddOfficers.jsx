import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import OfficerFetches from '../../fetches/OfficerFetches.jsx';

class AddOf extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value.length < 3) {
      alert('Короткий пароль.');
      return;
    }
    if (e.target.repassword.value !== e.target.password.value) {
      alert('Пароли не сопадают! Попробуете еще раз.');
      return;
    }
    OfficerFetches.addOfficer(e.target)
      .then(() => {
        this.props.refresh();
        alert('Сотрудник добавлен!');
      })
      .then(() => e.target.reset())
      .catch((err) => alert(err));
  };

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
            Добавить сотрудника
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                  />
                </Form.Group>
                <Form.Group controlId="firstName">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    required
                    placeholder="Имя"
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    required
                    placeholder="Фамилия"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="Пароль"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Подтвердите пароль</Form.Label>
                  <Form.Control
                    type="password"
                    name="repassword"
                    required
                    placeholder="Подтвердите пароль"
                  />
                </Form.Group>
                <Form.Group controlId="approved">
                  <Form.Switch
                    label="Одобрить"
                    name="approved"
                    defaultChecked={this.props.officerapproved}
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

export default AddOf;
