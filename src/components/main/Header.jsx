import React, { Component } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { checkUser } from './CheckUser.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  componentDidMount() {
    checkUser();
    this.setState({ currentUser: checkUser() });
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              {currentUser._id ? (
                <div>
                  <h5>{currentUser.firstName}</h5>
                  <Button onClick={this.logOut}>Выйти</Button>
                </div>
              ) : (
                <div>
                  <Button
                    onClick={() => window.location.assign('/auth/sign_in')}
                  >
                    Авторизироваться
                  </Button>{' '}
                  <Button
                    onClick={() => window.location.assign('/auth/sign_up')}
                  >
                    Зарегистрироваться
                  </Button>
                </div>
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
