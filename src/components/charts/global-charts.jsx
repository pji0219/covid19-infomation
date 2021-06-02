import React from 'react';
import styles from './global-charts.module.css';

function GlobalCharts({
  globalConfirmedData,
  globalActiveData,
  globalRecoveredData,
  globalDeathData,
  usConfirmedData,
  usActiveData,
  usRecoveredData,
  usDeathData,
  jpConfirmedData,
  jpActiveData,
  jpRecoveredData,
  jpDeathData,
  cnConfirmedData,
  cnActiveData,
  cnRecoveredData,
  cnDeathData,
}) {
  return (
    <section>
      <div className={styles.global_overall_container}>
        <span className={styles.global_overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {globalConfirmedData}명
        </span>
        <span className={styles.global_overall_active}>
          <div className={styles.active_icon}>
            <i class="fas fa-hospital"></i>
          </div>
          격리: {globalActiveData}명
        </span>
        <span className={styles.global_overall_recovered}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {globalRecoveredData}명
        </span>
        <span className={styles.global_overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {globalDeathData}명
        </span>
      </div>
      <div className={styles.usa_overall_container}>
        <span className={styles.usa_overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {usConfirmedData}명
        </span>
        <span className={styles.usa_overall_active}>
          <div className={styles.active_icon}>
            <i class="fas fa-hospital"></i>
          </div>
          격리: {usActiveData}명
        </span>
        <span className={styles.usa_overall_recovered}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {usRecoveredData}명
        </span>
        <span className={styles.usa_overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {usDeathData}명
        </span>
      </div>
      <div className={styles.jp_overall_container}>
        <span className={styles.jp_overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {jpConfirmedData}명
        </span>
        <span className={styles.jp_overall_active}>
          <div className={styles.active_icon}>
            <i class="fas fa-hospital"></i>
          </div>
          격리: {jpActiveData}명
        </span>
        <span className={styles.jp_overall_recovered}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {jpRecoveredData}명
        </span>
        <span className={styles.jp_overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {jpDeathData}명
        </span>
      </div>
      <div className={styles.cn_overall_container}>
        <span className={styles.cn_overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {cnConfirmedData}명
        </span>
        <span className={styles.cn_overall_active}>
          <div className={styles.active_icon}>
            <i class="fas fa-hospital"></i>
          </div>
          격리: {cnActiveData}명
        </span>
        <span className={styles.cn_overall_recovered}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {cnRecoveredData}명
        </span>
        <span className={styles.cn_overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {cnDeathData}명
        </span>
      </div>
    </section>
  );
}

export default GlobalCharts;
