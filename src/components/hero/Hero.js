import React from 'react';
import PropTypes from 'prop-types';

/**
 * Hero
 */
export const Hero = props => (
  <div className="hero">
    <h1 className="hero__title">{props.title}</h1>
    <figure className="hero__figure">
      <img className="hero__img" src={props.imageSrc} alt="Tim Bakkum" />
    </figure>
    <p className="hero__underline">{props.underline}</p>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  underline: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Hero;
