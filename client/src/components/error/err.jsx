import React from 'react';
import styles from './err.module.css';

function Err() {
  return (
    <div className={styles.err_container}>
      <p className={styles.err_msg}>
        ๐ฑ ์๋ฌ๊ฐ ๋ฐ์ ํ์์ต๋๋ค.
        <br />
        ์๋ก๊ณ ์นจ์ ๋๋ฅด์๊ณ  ์ ์ ๊ธฐ๋ค๋ ค ์ฃผ์๊ฑฐ๋
        <br />
        ๋ค๋ฅธ ์๋น์ค๋ฅผ ์ด์ฉํด ์ฃผ์๊ธฐ ๋ฐ๋๋๋ค.
        <br />
        ์ฃ์กํฉ๋๋ค. ๐โโ๏ธ
      </p>
      <a
        className={styles.link}
        href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98"
        title="์ฝ๋ก๋ ํํฉ ๋ณด๋ฌ๊ฐ๊ธฐ"
        target="blank"
      >
        <p className={styles.another_info}>naver ์ฝ๋ก๋ ํํฉ ๋ณด๋ฌ๊ฐ๊ธฐ</p>
      </a>
    </div>
  );
}

export default Err;
