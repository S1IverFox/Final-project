import React, { Component } from 'react';
import SignFetches from '../../fetches/SignFetches.jsx';
import { Button, Form } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    repassword: '',
    firstName: '',
    lastName: '',
    clientId: '',
    formErrors: { password: '' },
    passwordValid: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value.length < 4) {
      alert('Короткий пароль.');
      return;
    }
    if (e.target.repassword.value !== e.target.password.value) {
      alert('Пароли не сопадают! Попробуете еще раз.');
      return;
    }
    SignFetches.postUserSignUp(e.target)
      .then((message) => {
        alert(message);
        window.location.assign('/');
      })
      .catch((reason) => {
        alert(reason);
      });
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
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </Form.Group>
          <Form.Group onChange={this.handleUserInput}>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Пароль"
              required
              isInvalid={!!this.state.formErrors.password}
            />
            <Form.Control.Feedback type="invalid">
              {this.state.formErrors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Повторите пароль</Form.Label>
            <Form.Control
              type="password"
              name="repassword"
              placeholder="Повторите пароль"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Имя"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Фамилия"
              required
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
            <Button type="submit">Зарегистрироваться</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SignUp;
