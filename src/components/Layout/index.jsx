import React from 'react';
import logo from '../../assets/images/logo-white.png';
import './styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <section className="bgHeader">
        <section className="bgHeader-logo">
          <img src={logo} title="" alt="" />
        </section>
      </section>
      <section className="bgContent">{children}</section>
    </>
  );
};

export default Layout;
