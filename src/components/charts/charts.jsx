import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styles from './charts.module.css';

function Charts({
  overallConfirm,
  overallActive,
  overallRecover,
  overallDeath,
  confirmedData,
  monthActive,
  monthRecovered,
  monthDeath
}) {
  
  return (
    <section>
      <div className={styles.overall_container}>
        <span className={styles.overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {overallConfirm}명
        </span>
        <span className={styles.overall_active}>
          <div className={styles.active_icon}>
            <i class="fas fa-hospital"></i>
          </div>
          격리: {overallActive}명
        </span>
        <span className={styles.overall_recover}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {overallRecover}명
        </span>
        <span className={styles.overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {overallDeath}명
        </span>
      </div>
      <div className={styles.charts_container}>
        <div className={styles.confirmed_chart}>
          <Bar
            data={confirmedData}
            option={
              {
                plugin: {
                  title: {
                    display: true,
                    position: 'top',
                    text: '국내 누적 확진자 추이',
                    fontSize: 16
                  },
                  legend: {
                    dsiplay: true,
                    position: 'bottom'
                  }
                }
              }
            }
          />
        </div>
        <div className={styles.active_chart}>
          <Line
            data={monthActive}
            options={
              {
               plugin: {
                title: {
                  display: true,
                  position: 'top',
                  text: '국내 월별 격리자 추이',
                  fontSize: 16,
                },
                legend: {
                  display: true,
                  position: 'bottom'
                }
               }
              }
            }
            height={225}
          />
        </div>
        <div className={styles.recovered_chart}>
          <Line
            data={monthRecovered}
            options={
              {
               plugin: {
                title: {
                  display: true,
                  positon: 'top',
                  text: '국내 월별 격리 해제자 추이',
                  fontSize: 16,
                },
                legend: {
                  display: true,
                  position: 'bottom'
                }
               }
              }
            }
            height={285}
          />
        </div>
        <div className={styles.death_chart}>
          <Line
            data={monthDeath}
            options={
              {
               plugin: {
                title: {
                  display: true,
                  position: 'top',
                  text: '국내 월별 사망자 추이',
                  fontSize: 16,
                },
                legend: {
                  display: true,
                  position: 'bottom'
                }
               }
              }
            }
            height={320}
          />
        </div>
      </div>
    </section>
  );
}

export default Charts;
