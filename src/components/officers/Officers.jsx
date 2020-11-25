import React, { Component } from 'react';
import { officerCreate } from './officerAct.jsx';
import { connect } from 'react-redux';
import Button from '../Buttons/Button.jsx';
import OfficersList from './OfficersList.jsx';

class OfficersCreate extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    approved: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  approved = () => {
    this.setState({ approved: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.officerCreate(this.state);
  };

  handleSubmitList = (e) => {
    e.preventDefault();
    this.props.officersList(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>firstName</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>lastName</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <label>approved</label>
          <input
            type="checkbox"
            name="approved"
            value={this.state.approved}
            onChange={this.approved}
          />
          <br />

          {/* <label>clientId</label>
          <input
            type="text"
            name="clientId"
            placeholder="clientId"
            value={this.state.clientId}
            onChange={this.handleChange}
          />
          <br /> */}

          <input type="submit" />
        </form>
        <div>
          <Button
            btnText="Main screen"
            onClickBtn={
              () => window.location.assign('http://localhost:8080')
              // window.location.assign('http://84.201.129.203:8888/auth/sign_in')
            }
          />
        </div>
        <div>
          <OfficersList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  officerCreate: (userInfo) => dispatch(officerCreate(userInfo)),
  // officersList: (userInfo) => dispatch(officersList(userInfo)),
});

export default connect(null, mapDispatchToProps)(OfficersCreate);
