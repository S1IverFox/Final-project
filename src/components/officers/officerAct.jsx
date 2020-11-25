import React from 'react';
import 'redux-thunk';

export const officerCreate = (state) => {
  return (dispatch) => {
    const token = localStorage.token;
    // const token =
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    if (token) {
      return fetch('http://84.201.129.203:8888/api/officers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(state),
      })
        .then((response) => response.json())
        .then(() => {
          alert('Пользователь создан');
        })

        .then((data) => {
          localStorage.setItem('token', data.token);
          dispatch(loginUser(data.state));
          alert('Введенный email уже занят');
        });
    }
  };
};

export const officersList = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch('http://84.201.129.203:8888/api/officers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((officers) => {
          this.setItem({ officers });
          // if (data.message) {
          // } else {
          //   localStorage.removeItem('token');
          //   dispatch(officersList(data.state));
          // }
        });
    }
  };
};

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const officersDelete = (state) => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch('http://84.201.129.203:8888/api/officers:id', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(state),
      })
        .then((response) => response.json())
        .then(() => {
          alert('Удалено');
          // if (data.message) {
          // } else {
          //   localStorage.removeItem('token');
          //   dispatch(officersList(data.state));
          // }
        })
        .then((data) => {
          localStorage.setItem('token', data.token);
          dispatch(loginUser(data.state));
          alert('Введенный email уже занят');
        });
    }
  };
};
