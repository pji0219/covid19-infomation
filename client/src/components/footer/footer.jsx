import React from 'react';
import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
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
      <p className={styles.message}>
        코로나가 얼른 종식 되기를 바라며
        <br />
        의료진분들과 국민 여러분을 응원 합니다.
        <br />
        <span className={styles.programmer}>개발자: 박종익</span>
      </p>
    </footer>
  );
}

export default Footer;
