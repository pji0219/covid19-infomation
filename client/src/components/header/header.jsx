import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>
        <i class="fas fa-virus"></i>
        코로나 알고가!
      </span>
      <NavLink
        to="/"
        exact
        className={styles.korea}
        activeClassName={styles.selected}
      >
        <i class="fas fa-chart-line"></i>
        국내 현황
      </NavLink>
      <NavLink
        to="/global"
        className={styles.global}
        activeClassName={styles.selected}
      >
        <i class="fas fa-globe-asia"></i>
        해외 현황
      </NavLink>
      <NavLink
        to="/news"
        className={styles.news}
        activeClassName={styles.selected}
      >
        <i class="far fa-newspaper"></i>
        관련 뉴스
      </NavLink>
      <NavLink
        to="/source"
        className={styles.data}
        activeClassName={styles.selected}
      >
        <i class="fas fa-server"></i>
        데이터 출처
      </NavLink>
    </header>
  );
}

export default Header;
