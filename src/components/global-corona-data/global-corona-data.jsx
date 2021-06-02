import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalCharts from '../charts/global-charts';
import Header from '../header/header';

function GlobalCoronaData() {
  // 세계 종합 state
  const [globalConfirmedData, setGlobalConfirmedData] = useState();
  const [globalActiveData, setGlobalActiveData] = useState();
  const [globalRecoveredData, setGlobalRecoveredData] = useState();
  const [globalDeathData, setGlobalDeathData] = useState();

  // 미국 종합 state
  const [usConfirmedData, setUsConfirmedData] = useState();
  const [usActiveData, setUsActiveData] = useState();
  const [usRecoveredData, setUsRecoveredData] = useState();
  const [usDeathData, setUsDeathData] = useState();

  // 일본 종합 state
  const [jpConfirmedData, setJpConfirmedData] = useState();
  const [jpActiveData, setJpActiveData] = useState();
  const [jpRecoveredData, setJpRecoveredData] = useState();
  const [jpDeathData, setJpDeathData] = useState();

  // 중국 종합 state
  const [cnConfirmedData, setCnConfirmedData] = useState();
  const [cnActiveData, setCnActiveData] = useState();
  const [cnRecoveredData, setCnRecoveredData] = useState();
  const [cnDeathData, setCnDeathData] = useState();

  useEffect(() => {
    // main
    const fatchData = async () => {
      const global = await axios
        .get('https://api.covid19api.com/summary')
        .catch((err) => console.log(err));

      const us = await axios
        .get('https://api.covid19api.com/total/dayone/country/us')
        .catch((err) => console.log(err));

      const jp = await axios
        .get('https://api.covid19api.com/total/dayone/country/jp')
        .catch((err) => console.log(err));

      const cn = await axios
        .get('https://api.covid19api.com/total/dayone/country/cn')
        .catch((err) => console.log(err));

      makeData(global.data.Global, us.data, jp.data, cn.data);
    };
    fatchData();

    // 데이터 가공
    const makeData = (global, us, jp, cn) => {
      // 세계 종합 현황
      const globalActive =
        Number(global.TotalConfirmed) -
        Number(global.TotalRecovered) -
        Number(global.TotalDeaths);
      setGlobalConfirmedData(global.TotalConfirmed);
      setGlobalActiveData(globalActive);
      setGlobalRecoveredData(global.TotalRecovered);
      setGlobalDeathData(global.TotalDeaths);

      // 미국 종합 현황
      const usa = us[us.length - 1];
      setUsConfirmedData(usa.Confirmed);
      setUsActiveData(usa.Active);
      setUsRecoveredData(usa.Recovered);
      setUsDeathData(usa.Deaths);

      // 일본 종합 현황
      const japan = jp[jp.length - 1];
      setJpConfirmedData(japan.Confirmed);
      setJpActiveData(japan.Active);
      setJpRecoveredData(japan.Recovered);
      setJpDeathData(japan.Deaths);

      // 중국 종합 현황
      const china = cn[cn.length - 1];
      setCnConfirmedData(china.Confirmed);
      setCnActiveData(china.Active);
      setCnRecoveredData(china.Recovered);
      setCnDeathData(china.Deaths);
    };
  }, []);

  return (
    <>
      <Header />
      <GlobalCharts
        globalConfirmedData={globalConfirmedData}
        globalActiveData={globalActiveData}
        globalRecoveredData={globalRecoveredData}
        globalDeathData={globalDeathData}
        usConfirmedData={usConfirmedData}
        usActiveData={usActiveData}
        usRecoveredData={usRecoveredData}
        usDeathData={usDeathData}
        jpConfirmedData={jpConfirmedData}
        jpActiveData={jpActiveData}
        jpRecoveredData={jpRecoveredData}
        jpDeathData={jpDeathData}
        cnConfirmedData={cnConfirmedData}
        cnActiveData={cnActiveData}
        cnRecoveredData={cnRecoveredData}
        cnDeathData={cnDeathData}
      />
    </>
  );
}

export default GlobalCoronaData;
