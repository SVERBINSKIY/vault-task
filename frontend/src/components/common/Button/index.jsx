import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({variant, type, disabled, children}) => (
  <button
    className={`button ${variant} ${disabled ? 'disabled' : ''}`}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
