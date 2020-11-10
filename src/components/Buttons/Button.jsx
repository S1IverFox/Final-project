import React from 'react';

const Button = ({ btnType, btnText, btnStatus, onClickBtn }) => {
  const btnClass = `btn ${btnType} ${btnStatus}`;
  return (
    <button className={btnClass} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

export default Button;
