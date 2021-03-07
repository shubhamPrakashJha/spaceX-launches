import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css'

function Button({children, onClick, active}) {
  return (
    <button onClick={onClick} className={active ? styles.activeButton : styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
