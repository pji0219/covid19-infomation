import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import News from '../news/news';
import styles from './news-data.module.css';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import Err from '../error/err';

function NewsData() {
  const [isNormal, setIsNormal] = useState(true);
  const [isloading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/navernews`)
        .then((res) => {
          makeData(res.data.items);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsNormal(false);
          console.log('에러 발생! (o_0;)', err);
        });
    }

    fetchData();

    // 데이터 가공
    function makeData(data) {
      const arr = data.reduce((acc, cur) => {
        // 제목의 특정 문자를 다른 것으로 대체
        const removeWord = /[<b>|</b>|&qout|amp|lt|gt;]/g;
        const dataTitle = cur.title;
        const newTitle = dataTitle
          .replace(removeWord, '')
          .replace(/#39/g, "'")
          .replace(/#34/g, '"');

        // 설명의 특정 문자를 다른 것으로 대체
        const dataDesc = cur.description;
        const newDesc = dataDesc
          .replace(removeWord, '')
          .replace(/#39/g, "'")
          .replace(/#34/g, '"');

        // 날짜 형식 변경
        const newDate = moment(cur.pubdate).format('YYYY.MM.DD');

        const DataLink = cur.link;

        acc.push({
          newTitle,
          newDesc,
          newDate,
          DataLink,
        });

        return acc;
      }, []);

      setNews(arr);
    }
  }, []);

  return (
    <>
      {isNormal ? (
        <>
          {isloading ? (
            <LoadingSpinner />
          ) : (
            <>
              <p className={styles.description}>
                코로나 관련 기사들을 보여 줍니다. (최신순 10개)
              </p>
              <div className={styles.container}>
                <ul className={styles.news_container}>
                  {news.map((item, index) => (
                    <News
                      key={index}
                      title={item.newTitle}
                      description={item.newDesc}
                      link={item.DataLink}
                      pubDate={item.newDate}
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      ) : (
        <Err />
      )}
    </>
  );
}

export default NewsData;
