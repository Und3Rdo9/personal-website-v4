import React from 'react';
import Navigation from './../navigation/Navigation';
import logo from './../../logo.svg';

const Header = () => (
  <header>
    <Navigation />
    <img src={logo} className="App-logo" alt="logo" />
  </header>
);

export default Header;
