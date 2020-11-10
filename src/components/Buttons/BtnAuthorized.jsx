import React from 'react';
import Button from '../Buttons/Button.jsx';

function Authorized() {
  return (
    <div>
      <Button
        btnText="Войти"
        onClickBtn={
          () => window.location.assign('http://localhost:8080/api/auth')
          // window.location.assign('http://localhost:8080/api/auth')
        }
      />
    </div>
  );
}

export default Authorized;
