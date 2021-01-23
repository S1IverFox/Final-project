import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const footerStyle = {
  backgroundColor: '#ffc107',
};
const logoStyle = {
  backgroundImage:
    'url("https://vk.com/doc34732150_585273286?hash=f912b03d4b4ab58ae7&dl=0f12170d6e26d7d319")',
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
          <Navbar.Brand href="/" style={logoStyle}></Navbar.Brand>
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
