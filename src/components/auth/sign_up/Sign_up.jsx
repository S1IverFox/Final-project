import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPost } from '../authAct.jsx';

class Sign_up extends Component {
  state = {
    email: '',
    password: '',
    repassword: '',
    firstName: '',
    lastName: '',
    clientId: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userPost(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Sign up</div>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="repassword"
            placeholder="repassword"
            value={this.state.repassword}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="clientId"
            placeholder="ClientId"
            value={this.state.clientId}
            onChange={this.handleChange}
            required
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPost: (userInfo) => dispatch(userPost(userInfo)),
});

export default connect(null, mapDispatchToProps)(Sign_up);
