import React, { Component } from 'react';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

/* CSS */
import './app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
