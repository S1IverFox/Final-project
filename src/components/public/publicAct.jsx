import React from 'react';
import 'redux-thunk';

export const addStatement = (state) => {
  return (dispatch) => {
    return fetch('http://84.201.129.203:8888/api/public/report', {
      // return fetch('http://localhost:8080/api/auth/sign_up', {
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
          //Тут прописываем логику
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.state));
        }
      });
  };
};

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const FormErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[[fieldName].length > 0]) {
        // if (formErrors.length > 0) {
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
