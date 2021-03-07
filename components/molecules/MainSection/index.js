import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css'

const MainSection = ({ children }) => (
  <main id="MainSection" className={styles.main} >
    {children}
  </main>
);
MainSection.propTypes = {
  children: PropTypes.any,
};

export default MainSection;
