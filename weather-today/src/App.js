import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/style.css';

class App extends Component {

  render() {
    return (
      <div id="layout">

          <nav id="index-nav">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/busca">Previsão Do Tempo</Link></li>
            </ul>
          </nav>

          <div id="main">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
