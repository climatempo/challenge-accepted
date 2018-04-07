import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Card from '../Card/Card';
import store from '../../store/store';

class App extends Component {
  render() {
    return (
      <div className="container-fluid background">
        <Nav />
        <Search />
        <Card />
      </div>
    );
  }
}

export default App;
