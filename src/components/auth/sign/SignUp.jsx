import React, { Component } from 'react';
import { FormErrors } from '../authAct.jsx';
import SignFetches from '../../../fetches/SignFetches.jsx';
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
    formValid: false,
  };

  handleSubmit(e) {
    e.preventDefault();
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
  }

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
        passwordValid = value.length >= 3;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        passwordValid: passwordValid,
      },
      this.validateForm()
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.passwordValid,
    });
  }

  render() {
    return (
      <div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
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
              placeholder="password"
              required
            />
            <Form.Group>
              <Form.Label>Повторите пароль</Form.Label>
              <Form.Control
                type="password"
                name="repassword"
                placeholder="repassword"
                required
              />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="clientId"
              placeholder="ClientId"
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
