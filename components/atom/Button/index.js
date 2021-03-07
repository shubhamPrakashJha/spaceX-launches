import React from 'react';
import PropTypes from 'prop-types';

function Button({text}) {
  return (
    <button>
      {text}
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.string
}

export default Button
