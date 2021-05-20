import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CoronaData() {
  const [confirmed, setConfirmed] = useState();
  const [active, setActive] = useState();
  const [death, setDeath] = useState();
  const [recovered, setRecovered] = useState();

  useEffect(() => {
    const fatchData = async () => {
      const res = await axios
        .get('https://api.covid19api.com/total/dayone/country/kr')
        .catch((err) => console.log(err));
      makeData(res.data);
    };
    fatchData();

    const makeData = (res) => {
      const data = res;

      // 국내 종합 현황을 위한 가장 최근 데이터
      const newestData = data[data.length - 1];
      const confirmed = newestData.Confirmed;
      const active = newestData.Active;
      const death = newestData.Deaths;
      const recovered = newestData.Recovered;
      console.log(newestData);

      setConfirmed(confirmed);
      setActive(active);
      setDeath(death);
      setRecovered(recovered);
    };
  }, []);

  return (
    <section>
      <h1>확진: {confirmed}</h1>
      <h1>격리: {active}</h1>
      <h1>사망: {death}</h1>
      <h1>회복: {recovered}</h1>
    </section>
  );
}

export default CoronaData;
