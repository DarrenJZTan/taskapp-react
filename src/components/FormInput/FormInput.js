import React from 'react'

const FormInput = ({ placeholder, label, inputType, title, isValid }) => {
  return (
    <div className="col mb-4">
        <label for={label} className="form-label fw-bold">{title}: </label>
        <br />
        <input type={inputType} name={label} id={label} placeholder={placeholder} className="form-control rounded-pill" />
        {isValid ? <div className="valid-feedback"></div> : <div className="invalid-feedback">Input needed</div>}
    </div>  
  )
}

export default FormInput
