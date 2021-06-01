import React from 'react';

function GlobalCharts() {
  return (
    <section>
      <div className={styles.global_overall_container}>
        <span className={styles.global_overall_confirmed}>
          <div className={styles.virus_icon}>
            <i class="fas fa-virus"></i>
          </div>
          확진: {overallConfirm}명
        </span>
        <span className={styles.global_overall_active}>
          <div className={styles.active_icon}>
            <i class="fas fa-hospital"></i>
          </div>
          격리: {overallActive}명
        </span>
        <span className={styles.global_overall_recover}>
          <div className={styles.recovered_icon}>
            <i class="fas fa-virus-slash"></i>
          </div>
          격리 해제: {overallRecover}명
        </span>
        <span className={styles.global_overall_death}>
          <div className={styles.death_icon}>
            <i class="fas fa-skull-crossbones"></i>
          </div>
          사망: {overallDeath}명
        </span>
      </div>
    </section>
  );
}

export default GlobalCharts;
