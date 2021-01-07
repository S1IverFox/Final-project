class SignFetches {
  static postUserSignUp(user) {
    return fetch('http://84.201.129.203:8888/api/auth/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: user.email.value,
        password: user.password.value,
        repassword: user.repassword.value,
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        clientId: user.clientId.value,
      }),
    }).then((response) => {
      if (response.ok) {
        return Promise.resolve('Успешная регистрация!');
      } else {
        return response
          .json()
          .then((data) => data.error.message)
          .then((message) => {
            throw new Error(message);
          });
      }
    });
  }

  static postUserLogIn(email, password) {
    return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response
          .json()
          .then((data) => data.error.message)
          .then((message) => {
            throw new Error(message);
          });
      }
    });
  }
}
export default SignFetches;
