import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
