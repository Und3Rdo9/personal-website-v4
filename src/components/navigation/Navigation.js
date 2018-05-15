import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/amsterdam-frontend-developer/about'>About me</Link>
    </li>
    <li>
      <Link to='/frontend-blog'>Blog</Link>
    </li>
  </ul>
);

export default Navigation;
