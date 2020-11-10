import React from 'react';
import Button from './Button.jsx';

function BtnOfficers() {
  return (
    <div>
      <Button
        btnText="Ответственные сотрудники"
        onClickBtn={
          () => window.location.assign('http://localhost:8080/api/officers')
          //window.location.assign('http://84.201.129.203:8888/api/officers')
        }
      />
    </div>
  );
}

export default BtnOfficers;
