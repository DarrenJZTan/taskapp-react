import React from 'react'

const FormButtons = ({text, type, className}) => {
  return (
    <button type={type} className={className}>{text}</button>
  )
}

export default FormButtons
