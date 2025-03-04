import React from 'react';
import { forwardRef } from 'react';

const Select = forwardRef(
  ({ className = '', label, options, error, ...other }, ref) => {
    return (
      <div className="form-floating">
        <select className={`form-select ${className}`} ref={ref} {...other}>
          {options.map((el, idx) => (
            <option key={idx} value={el.value}>
              {el.text}
            </option>
          ))}
        </select>
        <label>{label}</label>
        {error && <div className="error-feedback">{error?.message}</div>}
      </div>
    );
  }
);
export default Select;
