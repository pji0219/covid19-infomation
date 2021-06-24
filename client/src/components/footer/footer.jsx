import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
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
