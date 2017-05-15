import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar fixedTop>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <img src="imgs/logo-white.png" />
		      </Navbar.Brand>
		    </Navbar.Header>
		  </Navbar>
    );
  }
}