import React, { Component } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import SignIn from '../auth/SignIn.jsx';
import { checkUser } from './CheckUser.jsx';
import logo from '../../img/Logo_2.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      authModalShow: false,
    };
  }

  headerStyle = {
    backgroundColor: '#ffc107',
  };
  logoStyle = {
    width: '6rem',
    height: '3.2rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

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
    let authModalClose = () => this.setState({ authModalShow: false });
    return (
      <div>
        <Navbar expand="lg" style={this.headerStyle}>
          <Container>
            <a href="/">
              <img src={logo} style={this.logoStyle} />
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Form inline>
                {currentUser._id ? (
                  <div style={{ display: 'inline-flex' }}>
                    <h5
                      className={'mr-2'}
                      style={{ color: '#343a40', marginTop: '5px' }}
                    >
                      {currentUser.firstName}
                    </h5>
                    <Button onClick={this.logOut} variant="outline-dark">
                      Выйти
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button
                      className="mr-2"
                      variant="outline-dark"
                      onClick={() => this.setState({ authModalShow: true })}
                    >
                      Авторизироваться
                    </Button>
                    <Button
                      variant="outline-dark"
                      onClick={() => window.location.assign('/auth/sign_up')}
                    >
                      Зарегистрироваться
                    </Button>
                  </div>
                )}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <SignIn show={this.state.authModalShow} onHide={authModalClose} />
      </div>
    );
  }
}

export default Header;
