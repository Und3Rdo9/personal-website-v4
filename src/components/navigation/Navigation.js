import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className='navigation'>
    <ul className='navigation__list'>
      <li className='navigation__item'>
        <NavLink
          className='navigation__link'
          activeClassName='navigation__link--active'
          exact={true}
          to='/'

        >
          Home
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink
          className='navigation__link'
          to='/amsterdam-frontend-developer/about'
          activeClassName='navigation__link--active'
          exact={true}
        >
          About me
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink
          className='navigation__link'
          to='/frontend-blog'
          activeClassName='navigation__link--active'
          exact={true}
        >
          Blog
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink
          className='navigation__link'
          to='/amsterdam-frontend-developer/contact'
          activeClassName='navigation__link--active'
          exact={true}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
