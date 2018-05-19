import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className='container'>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node
};

export default Container;
