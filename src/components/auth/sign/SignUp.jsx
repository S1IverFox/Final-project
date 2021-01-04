import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { userPost } from '../authAct.jsx';
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
    approve: true,
  };

  handleSubmit(e) {
    e.preventDefault();
    // return (dispatch) => {
    SignFetches.postUserSignUp(e.target);
    //   dispatch(loginUser(data));
    // };
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
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
          <Form.Group>
            <Form.Label>Повторите пароль</Form.Label>
            <Form.Control
              type="password"
              name="repassword"
              placeholder="repassword"
              required
            />
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
            <Form.Label>Approved</Form.Label>
            <input
              name="approved"
              type="checkbox"
              defaultChecked={this.state}
              disabled
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

const mapDispatchToProps = (dispatch) => ({
  userPost: (userInfo) => dispatch(userPost(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);
