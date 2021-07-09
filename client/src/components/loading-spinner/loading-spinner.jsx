import React from 'react';
import styles from './loading-spinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.loading_spinner_container}>
      <div className={styles.loading_spinner}></div>
      <span className={styles.loading_text}>Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
