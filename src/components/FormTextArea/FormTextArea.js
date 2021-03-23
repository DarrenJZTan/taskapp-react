import React from 'react'

const FormTextArea = ({placeholder, label, title, isValid}) => {
  return (
    <div className="col mb-4">
      <label for={label} className="form-label fw-bold">{title}: </label>
        <br />
        <textarea className="form-control" rows="3" placeholder={placeholder}></textarea>
        {isValid ? <div className="valid-feedback"></div> : <div className="invalid-feedback">Input needed</div>}
    </div>
  )
}

export default FormTextArea
