import React from "react";

const Button = ({ type, className, onClick, btnText, disabled }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
