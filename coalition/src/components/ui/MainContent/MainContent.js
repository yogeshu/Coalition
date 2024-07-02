import React from 'react';
import BloodPressureChart from '../BloodPressureChart/BloodPressureChart';
import DiagnosticList from '../DiagnosticList/DiagnosticList';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
  <div className={styles.mainContent}>
      <BloodPressureChart />
      
      <DiagnosticList />
      
    </div>
  );
};

export default MainContent;
