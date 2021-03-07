import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css'

function Button({children, onClick}) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.string
}

export default Button
