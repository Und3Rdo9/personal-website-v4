import React from 'react';

const Section = ({ type, children }) => (
  <section className={`section section--${type}`}>
    {children}
  </section>
);

export default Section;
