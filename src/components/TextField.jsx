import React from 'react';

const TextField = ({
  type = 'text',
  className = '',
  label,
  error,
  ...other
}) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={label}
        {...other}
      />
      <label>{label}</label>
      {error && <div className="error-feedback">{error?.message}</div>}
    </div>
  );
};

export default TextField;
