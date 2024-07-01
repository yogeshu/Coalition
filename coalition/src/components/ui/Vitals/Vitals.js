import React from 'react';
import styles from './Vitals.module.css';

const Vitals = () => {
  return (
    <div className={styles.vitals}>
      <div className={styles.vital}>
        <h3>Respiratory Rate</h3>
        <p>20 bpm</p>
      </div>
      <div className={styles.vital}>
        <h3>Temperature</h3>
        <p>98.6°F</p>
      </div>
      <div className={styles.vital}>
        <h3>Heart Rate</h3>
        <p>78 bpm</p>
      </div>
    </div>
  );
};

export default Vitals;
