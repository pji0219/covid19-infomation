import React from 'react';
import styles from './loading-spinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.loading_spinner_container}>
      <div className={styles.loading_spinner}></div>
      <h1 className={styles.loading_text}>Loading...</h1>
    </div>
  );
}

export default LoadingSpinner;