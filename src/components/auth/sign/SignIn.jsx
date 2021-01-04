import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../authAct.jsx';
import { FormErrors } from '../authAct.jsx';
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

  userLogin = (e) => {
    e.preventDefault();
    // return (dispatch) => {
    SignFetches.postUserLogIn(e.target);
    // dispatch(loginUser(data));
    // };
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
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Form onSubmit={this.userLogin}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
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

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userInfo) => dispatch(userLogin(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignIn);
