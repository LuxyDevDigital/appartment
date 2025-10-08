import React from 'react'

const Button = ({ label, dark=false }) => {
  return (
    <button type='button' className={`custom-button ${dark ? 'dark-btn' : ''}`}>
      {label}
    </button>
  )
}

export default Button