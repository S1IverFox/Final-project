import React from 'react';
import Button from './Button.jsx';

function BtnOfficers() {
  return (
    <div>
      <Button
        btnText="Ответственные сотрудники"
        onClickBtn={() => window.location.assign('/officers')}
      />
    </div>
  );
}

export default BtnOfficers;
