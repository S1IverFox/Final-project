import React from 'react';
import AddStatement from '../Buttons/BtnAddStatement.jsx';
import BtnCases from '../Buttons/BtnCases.jsx';
import BtnOfficers from '../Buttons/BtnOfficers.jsx';
import Button from '../Buttons/Button.jsx';

function Main() {
  return (
    <div>
      <div className="main">
        <h3>Hello</h3>
        <div>
          <Button
            btnText="Авторизироваться"
            onClickBtn={() => window.location.assign('/auth/sign_in')}
          />
          <Button
            btnText="Зарегистрироваться"
            onClickBtn={() => window.location.assign('/auth/sign_up')}
          />
        </div>
        <AddStatement />
        <BtnCases />
        <BtnOfficers />
      </div>
    </div>
  );
}

export default Main;
