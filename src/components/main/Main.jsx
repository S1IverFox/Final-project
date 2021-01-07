import AddStatement from '../buttons/BtnAddStatement.jsx';
import BtnCases from '../buttons/BtnCases.jsx';
import BtnOfficers from '../buttons/BtnOfficers.jsx';
import Button from '../buttons/Button.jsx';
import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  componentDidMount() {
    if (localStorage.currentUser) {
      const parsedUser = JSON.parse(localStorage.currentUser);
      this.setState({ currentUser: parsedUser });
    }
  }
  logOut = (event) => {
    event.preventDefault();
    // Удаление token из localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.setState({ currentUser: {} });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <div className="main">
          <div>
            {currentUser._id ? (
              <div>
                <h3>Hello, {currentUser.firstName}</h3>
                <Button btnText="Выйти" onClickBtn={this.logOut} />
                <BtnCases />
                <BtnOfficers />
              </div>
            ) : (
              <div>
                <h3>Hello</h3>
                <Button
                  btnText="Авторизироваться"
                  onClickBtn={() => window.location.assign('/auth/sign_in')}
                />
                <Button
                  btnText="Зарегистрироваться"
                  onClickBtn={() => window.location.assign('/auth/sign_up')}
                />
              </div>
            )}
          </div>
        </div>
        <AddStatement />
      </div>
    );
  }
}

export default Main;
