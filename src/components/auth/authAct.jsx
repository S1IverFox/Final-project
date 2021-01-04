import React from 'react';
import 'redux-thunk';
import SignFetches from '../../fetches/SignFetches.jsx';

export const userPost = (state) => {
  return (dispatch) => {
    SignFetches.postUserSignUp(state).then((data) => {
      if (data.message) {
        alert('Данный логин уже занят');
      } else {
        localStorage.setItem('token', data.token);
        dispatch(loginUser(data));
      }
    });
  };
};

export const userLogin = (e) => {
  // return (dispatch) => {
  SignFetches.postUserLogIn(e.target)
    .then((response) => {
      response.ok, response.json();
    })
    .then((data) => {
      if (data.message) {
      } else {
        localStorage.setItem('token', data.token);
        // dispatch(loginUser(data.state));
      }
    });
  // };
};

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      SignFetches.getProfile().then((data) => {
        if (data.message) {
          alert('Вы не авторизовались');
          localStorage.removeItem('token');
        } else {
          dispatch(loginUser(data.state));
        }
      });
    }
  };
};

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const FormErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName]) {
        return (
          <p key={i}>
            {fieldName} {formErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
