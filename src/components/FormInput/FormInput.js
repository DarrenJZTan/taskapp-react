import React, { useState } from "react";

const FormInput = ({
  placeholder,
  label,
  inputType,
  title,
  value,
  setState,
  setValidation
}) => {
  const [classNames, setClassNames] = useState('form-control rounded-pill');

  const handleChange = (e) => {
    setState(e.target.value);
    if(e.target.value.length > 2) {
      setValidation(true)
      setClassNames('form-control rounded-pill is-valid') 
    } else {
      setValidation(false)
      setClassNames('form-control rounded-pill is-invalid') 
    }
  };

 

  return (
    <div className="col mb-4">
      <label for={label} className="form-label fw-bold">
        {title}:
      </label>
      <br />
      <input
        type={inputType}
        name={label}
        id={label}
        placeholder={placeholder}
        className={classNames}
        value={value}
        onChange={handleChange}
      />
      <div className="valid-feedback"></div>
      <div style={{marginLeft: '5px'}}className="invalid-feedback">Input must be more than 2 characters long.</div>
      
    </div>
  );
};

export default FormInput;
