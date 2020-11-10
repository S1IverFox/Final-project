import React, { Component } from 'react';
import Button from '../Buttons/Button.jsx';
import { getProfileFetch, logoutUser } from '../auth/actions.jsx';
import { connect } from 'react-redux';

class Auth extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch();
  };

  handleClick = (event) => {
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
            onClickBtn={
              () =>
                window.location.assign('http://localhost:8080/api/auth/sign_in')
              // window.location.assign('http://84.201.129.203:8888/api/auth/sign_in')
            }
          />
        </div>
        <Button
          btnText="sign_up"
          onClickBtn={
            () =>
              window.location.assign('http://localhost:8080/api/auth/sign_up')
            // window.location.assign('http://84.201.129.203:8888/api/auth/sign_up')
          }
        />
        <div>
          {this.props.currentUser.name ? (
            <Button btnText="Log out" onClickBtn={this.handleClick} />
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
