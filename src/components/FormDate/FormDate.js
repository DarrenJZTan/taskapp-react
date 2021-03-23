import React from 'react'

const FormDate = ({ label, title, inputType, isValid}) => {
  return (
    <div className="col mb-4">
      <label for={label} className="form-label fw-bold">{title}:</label>
      <br />
      <input type={inputType} name={label} id={label} className="form-control rounded-pill" />
      {isValid ? <div className="valid-feedback"></div> : <div className="invalid-feedback">Choose Valid Date</div>}
    </div>
    
  )
}

export default FormDate
