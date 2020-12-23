import React, { Component } from 'react';
import AddStatement from '../Buttons/BtnAddStatement.jsx';
import Authirezed from '../Buttons/BtnAuthorized.jsx';
import BtnCases from '../Buttons/BtnCases.jsx';
import BtnOfficers from '../Buttons/BtnOfficers.jsx';

function Main() {
  return (
    <div>
      <div className="main">
        <h3>Hello</h3>
        <Authirezed />
        <AddStatement />
        <BtnCases />
        <BtnOfficers />
      </div>
    </div>
  );
}

export default Main;
