import React from 'react';
import styles from './not-found.module.css';

function NotFound() {
  return (
    <section className={styles.not_found_container}>
      <div className={styles.card}>
        <h1>404</h1>
      </div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <h1>url을 올바르게 입력 하였는지 확인해 보시기 바랍니다.</h1>
    </section>
  );
}

export default NotFound;
