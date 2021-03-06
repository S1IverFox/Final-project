import React, { Component } from 'react';
import SignFetches from '../../fetches/SignFetches.jsx';
import { Button, Col, Form, Modal } from 'react-bootstrap';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  userLoginFunc = (e) => {
    e.preventDefault();
    SignFetches.postUserLogIn(e.target.email.value, e.target.password.value)
      .then((user) => {
        localStorage.setItem('token', user.token);
        const userJson = JSON.stringify(user);
        localStorage.setItem('currentUser', userJson);
        alert(`Добро пожаловать, ${user.firstName}!`);
        window.location.assign('/');
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
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
              Авторизация
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.userLoginFunc}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Button type="submit" variant="outline-success">
                Войти
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} variant="outline-danger">
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
