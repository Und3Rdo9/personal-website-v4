import React, { Component } from 'react';
import Hero from './../hero/Hero';
import UspList from './../usp/UspList';
import portraitImg from './../../assets/images/portrait-tb.jpeg';


class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <Hero
          title='Tim Bakkum'
          underline='Amsterdam based front&#8209;end&nbsp;developer'
          imageSrc={portraitImg}
        />

        <UspList

        />
      </div>
    );
  }
}

export default HomePage;
