import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './corona-data.module.css';

function CoronaData() {
  const [overallConfirm, setOverallConfirm] = useState();
  const [overallRecover, setOverallRecover] = useState();
  const [overallDeath, setOverallDeath] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get('https://api.covid19api.com/total/dayone/country/kr')
        .catch((err) => console.log(err));
      makeData(res.data);
    };
    fetchData();

    const makeData = (data) => {
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
        const item = acc.find((a) => a.year === year && a.month === month);

        // 없으면 아래 형태로 넣음
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
      setOverallConfirm(newest.confirmed);
      setOverallRecover(newest.recovered);
      setOverallDeath(newest.death);
    };
  }, []);

  return (
    <section>
      <h1>코로나 종합 현황</h1>
      <div className={styles.overall_container}>
        <span className={styles.overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {overallConfirm}
        </span>
        <span className={styles.overall_recover}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {overallRecover}
        </span>
        <span className={styles.overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {overallDeath}
        </span>
      </div>
    </section>
  );
}

export default CoronaData;
