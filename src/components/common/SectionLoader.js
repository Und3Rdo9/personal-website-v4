import React from 'react';
import Loader from 'react-loaders';

const SectionLoader = ({ isActive }) => (
  <div className="loader-wrapper loader-wrapper--section">
    <Loader type="ball-grid-pulse" active={isActive} />
  </div>
);

export default SectionLoader;
