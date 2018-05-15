import React, { Component } from 'react';
import Hero from './../hero/Hero';
import UspList from './../usp/UspList';


class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero
          title="Tim Bakkum"
          underline="Amsterdam based frontend developer"
          imageSrc="http://via.placeholder.com/350x350"
        />
        <UspList

        />
      </div>
    );
  }
}

export default HomePage;
