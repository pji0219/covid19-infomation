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
      <div className={styles.korea}>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.selected}
        >
          국내 현황
        </NavLink>
      </div>
      <div className={styles.global}>
        <NavLink
          to="/global"
          className={styles.link}
          activeClassName={styles.selected}
        >
          해외 현황
        </NavLink>
      </div>
      <div className={styles.news}>
        <NavLink
          to="/news"
          className={styles.link}
          activeClassName={styles.selected}
        >
          관련 뉴스
        </NavLink>
      </div>
      <div className={styles.data}>
        <NavLink
          to="/source"
          className={styles.link}
          activeClassName={styles.selected}
        >
          데이터 출처
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
