import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Hero
 */
export class Hero extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <img src={this.props.imageSrc} alt=""/>
        <h1>{this.props.title}</h1>
        <p>{this.props.underline}</p>
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
