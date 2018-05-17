import React from 'react';

const Usp = ({ title, iconSrc, description }) => (
  <div className='usp__item'>
    <img
      className='usp__icon'
      src={iconSrc}
      alt={title}
    />
    <h3 className='usp__title'>{title}</h3>
    <p className='usp__description'>{description}</p>
  </div>
);

export default Usp;
