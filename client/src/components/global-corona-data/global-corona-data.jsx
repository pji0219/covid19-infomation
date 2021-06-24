import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalCharts from '../charts/global-charts';
import styles from './global-corona-data.module.css';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import Err from '../error/err';

function GlobalCoronaData() {
  // 에러 여부 state
  const [isNormal, setIsNormal] = useState(true);
  // loading state
  const [isLoading, setIsLoading] = useState(true);

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
  const url = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    // 해외 api
    const fetchGlobal = () => {
      return axios.get(`${url}/api/global`);
    };

    // 미국 api
    const fetchUs = () => {
      return axios.get(`${url}/api/usa`);
    };

    // 일본 api
    const fetchJp = () => {
      return axios.get(`${url}/api/jp`);
    };

    // 중국 api
    const fetchCn = () => {
      return axios.get(`${url}/api/cn`);
    };

    // 다중 api 호출
    axios
      .all([fetchGlobal(), fetchUs(), fetchJp(), fetchCn()])
      .then(
        axios.spread((global, us, jp, cn) => {
          makeData(global.data.Global, us.data, jp.data, cn.data);
          setIsLoading(false);
        })
      )
      .catch((err) => {
        setIsNormal(false);
        console.log('에러 발생! (o_0;)', err);
      });

    // 데이터 가공
    const makeData = (global, us, jp, cn) => {
      // 세계 종합 현황
      // 숫자 3자리수 마다 ,로 구분
      const globalConfirmed = Number(global.TotalConfirmed).toLocaleString();
      const globalActive1 =
        global.TotalConfirmed - (global.TotalRecovered + global.TotalDeaths);
      const globalActive2 = Number(globalActive1).toLocaleString();
      const globalRecovered = Number(global.TotalRecovered).toLocaleString();
      const globalDeath = Number(global.TotalDeaths).toLocaleString();
      setGlobalConfirmedData(globalConfirmed);
      setGlobalActiveData(globalActive2);
      setGlobalRecoveredData(globalRecovered);
      setGlobalDeathData(globalDeath);

      // 미국 종합 현황
      const usa = us[us.length - 1];
      // 숫자 3자리수 마다 ,로 구분
      const usConfirmed = Number(usa.Confirmed).toLocaleString();
      const usActive = Number(usa.Active).toLocaleString();
      const usRecovered = Number(usa.Recovered).toLocaleString();
      const usDeath = Number(usa.Deaths).toLocaleString();
      setUsConfirmedData(usConfirmed);
      setUsActiveData(usActive);
      setUsRecoveredData(usRecovered);
      setUsDeathData(usDeath);

      // 일본 종합 현황
      const japan = jp[jp.length - 1];
      // 숫자 3자리수 마다 ,로 구분
      const jpConfirmed = Number(japan.Confirmed).toLocaleString();
      const jpActive = Number(japan.Active).toLocaleString();
      const jpRecovered = Number(japan.Recovered).toLocaleString();
      const jpDeath = Number(japan.Deaths).toLocaleString();
      setJpConfirmedData(jpConfirmed);
      setJpActiveData(jpActive);
      setJpRecoveredData(jpRecovered);
      setJpDeathData(jpDeath);

      // 중국 종합 현황
      const china = cn[cn.length - 1];
      // 숫자 3자리수 마다 ,로 구분
      const cnConfirmed = Number(china.Confirmed).toLocaleString();
      const cnActive = Number(china.Active).toLocaleString();
      const cnRecovered = Number(china.Recovered).toLocaleString();
      const cnDeath = Number(china.Deaths).toLocaleString();
      setCnConfirmedData(cnConfirmed);
      setCnActiveData(cnActive);
      setCnRecoveredData(cnRecovered);
      setCnDeathData(cnDeath);
    };
  }, []);

  return (
    <>
      {isNormal ? (
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <p className={styles.desc}>
                해외 코로나 현황과 주변국 코로나 현황을 보여 줍니다. (단위: 명)
              </p>
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
          )}
        </>
      ) : (
        <Err />
      )}
    </>
  );
}

export default GlobalCoronaData;
