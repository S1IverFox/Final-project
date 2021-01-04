import React from 'react';
import Button from './Button.jsx';

function AddStatement() {
  return (
    <div>
      <Button
        btnText="Заявить о краже"
        onClickBtn={() => window.location.assign('/public/report')}
      />
    </div>
  );
}

export default AddStatement;
