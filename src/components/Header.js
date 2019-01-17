import React, { Component } from "react";
import logo from "../images/logo-white.png";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="tc bg-dark-blue w-100" style={{ height: "8vh" }}>
        <span className="dib h-100 v-mid"></span><img className="v-mid" src={logo} alt="logo-white" width="30%" />
      </div>
    );
  }
}

export default Header;
