import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loaders';

const SectionLoader = ({ isActive }) => (
  <div className="loader-wrapper loader-wrapper--section">
    <Loader type="ball-grid-pulse" active={isActive} />
  </div>
);

SectionLoader.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default SectionLoader;
