import React from 'react';
import Routes from './routes/Routes';
import Header from './header/Header';
import Footer from './footer/Footer';
import './../App.css';

const App = () => (
  <React.Fragment>
    <Header />
    <Routes />
    <Footer />
  </React.Fragment>
);

export default App;
