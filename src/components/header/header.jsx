import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>코로나 알고가!</span>
    </header>
  );
}

export default Header;
