import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';

// The header component
class Header extends Component {
  render(){
    return (
      <header className='header background-primary flex flex-align-center flex-justify-center'>
      <img className='logo' src={Logo} /> 
      </header>
    );
  }
}

export default Header;
