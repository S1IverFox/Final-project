import React from 'react';
import Button from './Button.jsx';

function BtnCases() {
  return (
    <div>
      <Button
        btnText="Сообщения о кражах"
        onClickBtn={() => window.location.assign('http://localhost:8080/cases')}
      />
    </div>
  );
}

export default BtnCases;
