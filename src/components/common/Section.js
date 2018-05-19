import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ type, children }) => (
  <section className={`section section--${type}`}>
    {children}
  </section>
);

Section.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

export default Section;
