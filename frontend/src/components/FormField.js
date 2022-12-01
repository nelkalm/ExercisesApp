import React from "react";

const FormField = ({ type, name, value, label, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        defaultValue={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormField;
