import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../../img/Logo_2.png';

const footerStyle = {
  backgroundColor: '#ffc107',
};
const logoStyle = {
  transform: 'scale(-1, 1)',
  width: '6rem',
  height: '3.2rem',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

function Footer() {
  return (
    <div>
      <Navbar style={footerStyle}>
        <Container>
          <a href="/">
            <img src={logo} style={logoStyle} />
          </a>
          <span style={{ color: '#343a40' }}>
            2021,{' '}
            <a
              style={{ color: '#343a40' }}
              href="https://github.com/S1IverFox/Final-project/tree/sideBrunch"
            >
              S1IverFox
            </a>
          </span>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
