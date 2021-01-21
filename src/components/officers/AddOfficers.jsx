import React, { Component } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import OfficerFetches from '../../fetches/OfficerFetches.jsx';

class AddOf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: { password: '' },
      passwordValid: false,
    };
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

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case 'password':
        passwordValid = value.length >= 4;
        fieldValidationErrors.password = passwordValid
          ? ''
          : ' Пароль слишком короткий!';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      passwordValid: passwordValid,
    });
  }

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
            Добавить сотрудника
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Row>
              <Form.Group controlId="firstName" as={Col}>
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  required
                  placeholder="Имя"
                />
              </Form.Group>
              <Form.Group controlId="lastName" as={Col}>
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  required
                  placeholder="Фамилия"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group onChange={this.handleUserInput} as={Col}>
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  placeholder="Пароль"
                  isInvalid={!!this.state.formErrors.password}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Подтвердите пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="repassword"
                  required
                  placeholder="Подтвердите пароль"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="approved">
              <Form.Switch
                label="Одобрить"
                name="approved"
                defaultChecked={this.props.officerapproved}
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

export default AddOf;
