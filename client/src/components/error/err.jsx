import React from 'react';
import styles from './err.module.css';

function Err() {
  return (
    <section>
      <div className={styles.err_container}>
        <div className={styles.err_messeage}>
          <h1>
            😱 에러가 발생 하였습니다.
            <br />
            새로고침을 누르시고 잠시 기다려 주시거나
            <br />
            다른 서비스를 이용해 주시기 바랍니다.
            <br />
            죄송합니다. 🙇‍♂️
          </h1>
          <a
            className={styles.link}
            href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98"
            title="코로나 현황 보러가기"
            target="blank"
          >
            <h3>naver 코로나 현황 보러가기</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Err;
