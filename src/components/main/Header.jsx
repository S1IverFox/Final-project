import React, { Component } from 'react';
import { Button, Navbar, Row } from 'react-bootstrap';

class Header extends Component {
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
    window.location.assign('/');
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            {currentUser._id ? (
              <Row>
                <h3>{currentUser.firstName}</h3>
                <Button onClick={this.logOut}>Выйти</Button>
              </Row>
            ) : (
              <div>
                <Button onClick={() => window.location.assign('/auth/sign_in')}>
                  Авторизироваться
                </Button>
                <Button onClick={() => window.location.assign('/auth/sign_up')}>
                  Зарегистрироваться
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
