import React, { useEffect, useState } from 'react';
import styles from './data-source.module.css';
import LoadingSpinner from '../loading-spinner/loading-spinner';

function DataSource() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={styles.container}>
          <h3 className={styles.title}>데이터 출처</h3>
          <p>이 사이트에서 사용된 데이터들의 출처 입니다.</p>
          <h4 className={styles.corona_api_title}>국내 및 해외 코로나 API</h4>
          <a
            href="https://documenter.getpostman.com/view/10808728/SzS8rjbc"
            title="코로나 API"
            target="blank"
          >
            https://documenter.getpostman.com/view/10808728/SzS8rjbc
          </a>
          <h4 className={styles.naver_news_title}>네이버 뉴스 API</h4>
          <a
            href="https://developers.naver.com/docs/serviceapi/search/news/news.md#%EB%89%B4%EC%8A%A4"
            title="네이버 뉴스 API"
            target="blank"
          >
            https://developers.naver.com/docs/serviceapi/search/news/news.md#%EB%89%B4%EC%8A%A4
          </a>
          <h4 className={styles.data_chart_title}>
            차트 라이브러리(react-chartjs-2)
          </h4>
          <a
            href="https://www.npmjs.com/package/react-chartjs-2"
            title="차트 라이브러리"
            target="blank"
          >
            https://www.npmjs.com/package/react-chartjs-2
          </a>
          <h4 className={styles.icon_title}>아이콘(fontawesome)</h4>
          <a href="https://fontawesome.com/" title="아이콘" target="blank">
            https://fontawesome.com/
          </a>
        </section>
      )}
    </>
  );
}

export default DataSource;
