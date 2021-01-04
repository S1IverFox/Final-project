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
        approved: user.approved.checked,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error.message) {
          alert(data.error.message);
        } else {
          localStorage.setItem('token', data.token);
          alert('Добро пожаловать!');
          window.location.assign('/');
        }
      });
  }

  static postUserLogIn(user) {
    return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: user.email.value,
        password: user.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.message) {
        //   alert(data.message);
        // } else {
        localStorage.setItem('token', data.token);
        alert('Добро пожаловать!');
        window.location.assign('/');
        // }
      });
  }

  static getToken() {
    return localStorage.token;
  }

  static getProfile() {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/auth/sign_in', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  }
}

export default SignFetches;
