import React from "react";

const Input = ({id, placeholder, type='text', label }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">{label}</label>
      <input id={id} placeholder={placeholder} className="input" type={type} />
    </div>
  );
};

export default Input;
