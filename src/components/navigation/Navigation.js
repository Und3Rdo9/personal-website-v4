import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link className="navigation__link" to='/'>Home</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to='/amsterdam-frontend-developer/about'>About me</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to='/frontend-blog'>Blog</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to='/amsterdam-frontend-developer/about'>Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
