import React from 'react';

import logo from '../../assets/logo-white.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <button type="button">
          <img src={logo} alt="climatempo logo" />
        </button>
      </div>
    </header>
  );
}
