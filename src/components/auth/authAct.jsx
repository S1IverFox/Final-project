import React from 'react';
import 'redux-thunk';

export const userPost = (state) => {
  return (dispatch) => {
    return fetch('http://84.201.129.203:8888/api/auth/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert('Данный логин уже занят');
        } else {
          localStorage.setItem('token', data.token);
          dispatch(loginUser(data.state));
        }
      });
  };
};

export const userLogin = (state) => {
  return (dispatch) => {
    return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ state }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
        } else {
          localStorage.setItem('token', data.token);
          dispatch(loginUser(data.state));
        }
      });
  };
};

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
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
