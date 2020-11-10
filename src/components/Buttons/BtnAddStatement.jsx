import React from 'react';
import Button from './Button.jsx';

function AddStatement() {
  return (
    <div>
      <Button
        btnText="Заявить о краже"
        onClickBtn={() =>
          window.location.assign('http://localhost:8080/api/report')
        }
      />
    </div>
  );
}

export default AddStatement;
