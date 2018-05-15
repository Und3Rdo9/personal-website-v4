import React from 'react';

const HeaderIcon = ({ iconSrc, iconAlt }) => (
  <span className="header-icon">
    <img src={iconSrc} alt={iconAlt} className="header-icon__img"/>
  </span>
);

export default HeaderIcon;
