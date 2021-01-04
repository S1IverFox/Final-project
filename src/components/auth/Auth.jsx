import React, { Component } from 'react';
import Button from '../Buttons/Button.jsx';
import { getProfileFetch, logoutUser } from './authAct.jsx';
import { connect } from 'react-redux';

class Auth extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch;
  };

  logOut = (event) => {
    event.preventDefault();
    // Удаление token из localStorage
    localStorage.removeItem('token');
    // удаление из Redux хранилица
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <div>
          <Button
            btnText="sign_in"
            onClickBtn={() => window.location.assign('/auth/sign_in')}
          />
        </div>
        <Button
          btnText="sign_up"
          onClickBtn={() => window.location.assign('/auth/sign_up')}
        />
        <div>
          {this.props.currentUser.name ? (
            <Button btnText="Log out" onClickBtn={this.logOut} />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
