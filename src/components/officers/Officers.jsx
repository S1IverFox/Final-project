import React, { Component } from 'react';

class Officers extends Component {
  state = {
    users: [
      // { id: 1, email: 'Vasya', password: 123456 },
      // { id: 2, email: 'Nastya', password: 198766 },
      {
        email: 'student@skillfactory.ru',
        password: '123456',
        clientId: 'a9432bbe73645c1825a4c426db59f47d',
      },
    ],
  };

  // handlEmailChange = (e) => {
  //   const email = e.target.value;
  //   this.setState({ email: email });
  // };
  // handlPasswordChange = (e) => {
  //   const password = e.target.value;
  //   this.setState({ password: password });
  // };

  handleOfficerCreate = (e) => {
    const users = this.state;
    fetch('http://84.201.129.203:8888/api/officers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    })
      .then(() => {
        alert('Пользователь создан');
        // this.setState({ email: '', password: null });
      })
      .catch(() => console.log('ошибка'));
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <div>hfhj</div>
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.email} {user.password}
            </li>
          ))}
        </ul>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={this.handlEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          onChange={this.handlPasswordChange}
        />
        <input
          type="button"
          onClick={this.handleOfficerCreate}
          value="Create"
        /> */}
      </div>
    );
  }
}

export default Officers;
