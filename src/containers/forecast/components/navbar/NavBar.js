import React from 'react'
import { Icon, Navbar, NavItem } from 'react-materialize'
import logo from '../../../../assets/images/logo-white.png'

const NavBar = (props) => {

    return (
        <Navbar className='navbar'>
            <img src={logo} className='logo'></img>
        </Navbar>
    )
}
export default NavBar;