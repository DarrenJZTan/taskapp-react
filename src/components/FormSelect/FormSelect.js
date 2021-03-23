import React from 'react'

const FormSelect = ({ label, title, isValid }) => {
  return (
    <div className="col mb-4">
      <label for={label} className="form-label fw-bold"> {title}: </label>
      <select className="form-select rounded-pill">
        <option selected>Choose Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      {isValid ? <div className="valid-feedback"></div> : <div className="invalid-feedback">Select option</div>}
    </div>
  )
}

export default FormSelect
