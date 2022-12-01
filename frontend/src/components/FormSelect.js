import React from "react";

const FormSelect = ({ label, name, value, handleChange, list }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select onChange={handleChange} name={name} defaultValue={value}>
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
