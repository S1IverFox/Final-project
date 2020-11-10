import reducer from './reducer.jsx';
import 'redux-thunk';

export const userPost = (user) => {
  return (dispatch) => {
    return fetch('http://84.201.129.203:8888/api/auth/sign_up', {
      // return fetch('http://localhost:8080/api/auth/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user,
        // email: 'student@skillfactory.ru',
        // password: '123456',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          //Тут прописываем логику
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

export const userLogin = (user) => {
  return (dispatch) => {
    // return fetch('http://localhost:8080/api/auth/sign_in', {
    return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        // email: 'student@skillfactory.ru',
        // password: '123456',
        user,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          //тут ваша логика
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

export const getProfileFetch = () => {
  return function action(dispatch) {
    dispatch();
    const token = localStorage.token;
    if (token) {
      return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
        // return fetch('http://localhost:8080/api/auth/sign_in', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => dispatch(reducer(response)))
        .then((data) => {
          if (data.message) {
            // Будет ошибка если token не дествительный
            localStorage.removeItem('token');
          } else {
            dispatch(loginUser(data.user.json));
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
