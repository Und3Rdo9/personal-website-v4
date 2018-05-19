import React, { Component } from 'react';
import Navigation from './../navigation/Navigation';
import HeaderIcon from './HeaderIcon';
import { Link } from 'react-router-dom';
import enhanceWithClickOutside from 'react-click-outside';

import logo from './../../assets/images/logo-tb-plain.svg';
import menu from './../../assets/images/menu-tb-plain.svg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationOpen: false
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleNavigation() {
    this.setState({
      navigationOpen: !this.state.navigationOpen
    });
  }

  handleClickOutside() {
    if (this.state.navigationOpen === true) {
      this.toggleNavigation();
    }
  }

  render() {
    return (
      <header className='header'>
        <Link
          to='/'
          className='header__logo'
          title='Homepage - Tim Bakkum'
        >
          <HeaderIcon
            iconSrc={logo}
            iconAlt='Logo Tim Bakkum'
          />
        </Link>
        <button
          className='header__navigation-toggle'
          onClick={this.toggleNavigation}
        >
          <HeaderIcon
            iconSrc={menu}
            iconAlt='Menu'
          />
        </button>
        <div className={this.state.navigationOpen ? `header__navigation-wrapper header__navigation-wrapper--open` : `header__navigation-wrapper`}>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default enhanceWithClickOutside(Header);
