import React, {useState} from 'react';

const FormSelect = ({ label, title, value, setState, setValidation }) => {
  const [classNames, setClassNames] = useState('form-control rounded-pill');

  const handleChange = (e) => {
    setState(e.target.value);
    if(e.target.value === 'Choose Status') {
      setValidation(false)
      setClassNames('form-control rounded-pill is-invalid') 
    } else {
      setValidation(true)
      setClassNames('form-control rounded-pill is-valid') 
    }
  };

  return (
    <div className="col mb-4">
      <label for={label} className="form-label fw-bold"> {title}: </label>
      <select className={classNames} value={value} onChange={handleChange}>
        <option selected>Choose Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      <div className="valid-feedback"></div>
      <div style={{marginLeft: '5px'}}className="invalid-feedback">Input must be more than 2 characters long.</div>
    </div>
  )
}

export default FormSelect
