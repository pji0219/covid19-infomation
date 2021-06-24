import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './kor-corona-data.module.css';
import Charts from '../charts/charts';
import Err from '../error/err';
import LoadingSpinner from '../loading-spinner/loading-spinner';
const url = process.env.REACT_APP_BASE_URL;

function KorCoronaData() {
  // 에러 여부 state
  const [isNormal, setIsNormal] = useState(true);

  // loading state
  const [isLoading, setIsLoading] = useState(true);

  // 종합 state
  const [overallConfirm, setOverallConfirm] = useState();
  const [overallActive, setOverallActive] = useState();
  const [overallRecover, setOverallRecover] = useState();
  const [overallDeath, setOverallDeath] = useState();

  // 누적 확진자 추이 state
  const [confirmedData, setConfirmedData] = useState();

  // 월별 격리자 state
  const [monthActive, setMonthActive] = useState();

  // 월별 격리 해제자 state
  const [monthRecovered, setMonthRecovered] = useState();

  // 월별 사망자 추이 state
  const [monthDeath, setMonthDeath] = useState();

  useEffect(() => {
    axios
      .get(`${url}/api/kor`)
      .then((res) => {
        makeData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsNormal(false);
        console.log('에러 발생! (o_0;)', err);
      });

    const makeData = (data) => {
      // API로 받은 데이터를 가공 ( 월별 누적 확진자 데이터로 )
      const arr = data.reduce((acc, cur) => {
        // 날짜 형식을 바꿈
        const curDate = new Date(cur.Date);
        const year = curDate.getFullYear();
        const month = curDate.getMonth();
        const date = curDate.getDate();

        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;

        // 누적 값에 현재 값의 년도와 월이 있는지 찾음
        const item = acc.find(
          (item) => item.year === year && item.month === month
        );

        // 없으면 아래 형태로 넣음 (없을 때만 넣어서 월별로 하루만 넣기 위해서)
        if (!item) {
          acc.push({ year, month, date, confirmed, active, death, recovered });
        }

        // 월별로 마지막 날로 갱신 (이전 날짜 데이터 덮어 씌움)
        if (item && item.date < date) {
          item.year = year;
          item.month = month;
          item.date = date;
          item.confirmed = confirmed;
          item.active = active;
          item.death = death;
          item.recovered = recovered;
        }

        return acc;
      }, []);
      // 가장 최근 종합 정보를 얻기 위한 마지막 인덱스
      const newest = arr[arr.length - 1];
      // 숫자에 3자리수마다 , 구분
      const confirmed = Number(newest.confirmed).toLocaleString();
      const active = Number(newest.active).toLocaleString();
      const recovered = Number(newest.recovered).toLocaleString();
      const death = Number(newest.death).toLocaleString();
      setOverallConfirm(confirmed);
      setOverallActive(active);
      setOverallRecover(recovered);
      setOverallDeath(death);

      const labels = arr.map((item) => `${item.year}.${item.month + 1}`);
      const confirmedData = arr.map((item) => item.confirmed);
      const activeData = arr.map((item) => item.active);
      const recoveredData = arr.map((item) => item.recovered);
      const deathData = arr.map((item) => item.death);

      //국내 누적 확진자 추이
      setConfirmedData({
        labels,
        datasets: [
          {
            label: '누적 확진자 추이',
            backgroundColor: '#f4511e',
            fill: true,
            data: confirmedData,
          },
        ],
      });

      // 월별 격리자 추이
      setMonthActive({
        labels,
        datasets: [
          {
            label: '월별 격리자 추이',
            borderColor: '#ef6c00',
            fill: false,
            data: activeData,
          },
        ],
      });

      // 월별 격리 해제자 추이
      setMonthRecovered({
        labels,
        datasets: [
          {
            label: '누적 격리 해제자 추이',
            borderColor: '#087f23',
            fill: false,
            data: recoveredData,
          },
        ],
      });

      // 월별 사망자 추이
      setMonthDeath({
        labels,
        datasets: [
          {
            label: '누적 사망자 추이',
            borderColor: '#321911',
            fill: false,
            data: deathData,
          },
        ],
      });
    };
  }, []);

  return (
    <>
      {isNormal ? (
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className={styles.container}>
              <h3 className={styles.title}>국내 코로나 종합 현황</h3>
              <p className={styles.description}>
                국내 코로나 현황과 각종 차트들을 보여 줍니다. (단위: 명)
              </p>
              <Charts
                overallConfirm={overallConfirm}
                overallActive={overallActive}
                overallRecover={overallRecover}
                overallDeath={overallDeath}
                confirmedData={confirmedData}
                monthActive={monthActive}
                monthRecovered={monthRecovered}
                monthDeath={monthDeath}
              />
            </div>
          )}
        </>
      ) : (
        <Err />
      )}
    </>
  );
}

export default KorCoronaData;
