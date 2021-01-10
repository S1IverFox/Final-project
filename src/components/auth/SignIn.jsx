import React, { Component } from 'react';
import SignFetches from '../../fetches/SignFetches.jsx';
import { Button, Form } from 'react-bootstrap';

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
        alert(`Добро пожаловать, ${user.firstName}`);
        window.location.assign('/');
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.userLoginFunc}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </Form.Group>

          <Button type="submit">Войти</Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
