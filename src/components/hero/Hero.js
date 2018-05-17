import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Hero
 */
export class Hero extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='hero'>
        <h1 className='hero__title'>{this.props.title}</h1>
        <figure className="hero__figure">
          <img className='hero__img' src={this.props.imageSrc} alt='Tim Bakkum'/>
        </figure>
        <p className='hero__underline'>{this.props.underline}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  underline: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
}

export default Hero;
