import React from 'react';
import Vitals from '../Vitals/Vitals';

import styles from './BloodPressureChart.module.css';

const BloodPressureChart = () => {
  return (
    <div className={styles.chart}>
      <h2>Blood Pressure</h2>
      
      <div className={styles.chartContent}>Chart Placeholder</div>
      <Vitals/>
    </div>
  );
};

export default BloodPressureChart;
