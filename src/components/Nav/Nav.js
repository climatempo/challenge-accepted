import React, { Component } from 'react';
import logo from '../../images/logo-white.png';

class Nav extends Component {
  render() {
    return (
      <div className="row">
         <nav className="nav col">
           <img className="nav mx-auto img-fluid" src={logo}/>
         </nav>
      </div>
    );
  }
}

export default Nav;
