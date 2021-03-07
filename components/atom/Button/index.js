import React from 'react';
import PropTypes from 'prop-types';

function Button({children, onClick}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.string
}

export default Button
