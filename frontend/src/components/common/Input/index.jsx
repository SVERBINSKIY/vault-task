import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Input = ({
  type, withError, label, name, error, touched, placeholder, value, onChange, onBlur,
}) => (
  <div>
    {
      label && (
        <span className={`label ${error && touched ? 'label__error' : ''}`}>
          {label}
        </span>
      )
    }
    <input
      className={`control ${error && touched ? 'control__error': ''}`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {
      withError && (
        <div className="error input__error">
          {
            error && touched ? error : ''
          }
        </div>
      )
    }
  </div>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  withError: PropTypes.bool.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
