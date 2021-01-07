import React, { Component } from 'react';
import SignFetches from '../../../fetches/SignFetches.jsx';
import { Button, Form } from 'react-bootstrap';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
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

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 3;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  render() {
    return (
      <div>
        <div>{/* <FormErrors formErrors={this.state.formErrors} /> */}</div>
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

          <Button
            type="submit"
            // disabled={!this.state.formValid}
          >
            Войти
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
