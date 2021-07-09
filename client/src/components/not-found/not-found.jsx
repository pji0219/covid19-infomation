import React from 'react';
import styles from './not-found.module.css';

function NotFound() {
  return (
    <section className={styles.not_found_container}>
      <div className={styles.card}>
        <span className={styles.status_code}>404</span>
      </div>
      <p className={styles.msg}>
        페이지를 찾을 수 없습니다.
        <br />
        url을 올바르게 입력 하였는지 확인해 보시기 바랍니다.
      </p>
    </section>
  );
}

export default NotFound;
