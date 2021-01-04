import React from 'react';
import Button from './Button.jsx';

function BtnCases() {
  return (
    <div>
      <Button
        btnText="Сообщения о кражах"
        onClickBtn={() => window.location.assign('/cases')}
      />
    </div>
  );
}

export default BtnCases;
