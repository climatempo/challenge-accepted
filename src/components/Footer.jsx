import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Navbar fixedBottom>
		    <Navbar.Header>
		        <a href="https://github.com/rghossi" target="_blank"><i href="#" className="fa fa-github-square"></i></a>
            <a href="https://linkedin.com/in/rafaelghossi" target="_blank"><i className="fa fa-linkedin-square"></i></a>
            <a href="https://twitter.com/rghossi" target="_blank"><i className="fa fa-twitter-square"></i></a>
            <a href="https://facebook.com/rafaelghossi" target="_blank"><i className="fa fa-facebook-square"></i></a>
            <a href="mailto:rafael.ghossi@gmail.com?Subject=Hello" target="_top"><i className="fa fa-envelope-square" aria-hidden="true"></i></a>
            <a href="tel:+5522998871161" target="_top"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
		    </Navbar.Header>
		  </Navbar>
    );
  }
}