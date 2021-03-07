import React from 'react';
import PropTypes from 'prop-types';

const MainSection = ({ children }) => (
  <main id="MainSection" >
    {children}
  </main>
);
MainSection.propTypes = {
  children: PropTypes.any,
};

export default MainSection;
