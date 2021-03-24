import React, {useState} from 'react';

const FormTextArea = ({placeholder, label, title, value, setState, setValidation}) => {

  const [classNames, setClassNames] = useState('form-control');

  const handleChange = (e) => {
    setState(e.target.value);
    if(e.target.value.length > 2) {
      setValidation(true)
      setClassNames('form-control is-valid') 
    } else {
      setValidation(false)
      setClassNames('form-control is-invalid') 
    }
  };
 
  return (
    <div className="col mb-4">
      <label for={label} className="form-label fw-bold">{title}: </label>
        <br />
        <textarea className={classNames} rows="3" placeholder={placeholder} value={value} onChange={handleChange}></textarea>
        <div className="valid-feedback"></div>
      <div style={{marginLeft: '5px'}}className="invalid-feedback">Input must be more than 2 characters long.</div>
    </div>
  )
}

export default FormTextArea
