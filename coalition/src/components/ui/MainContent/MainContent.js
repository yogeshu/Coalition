import React from 'react';
import BloodPressureChart from '../BloodPressureChart/BloodPressureChart';
import Vitals from '../Vitals/Vitals';
import DiagnosticList from '../DiagnosticList/DiagnosticList';
import LabResults from '../LabResults/LabResults';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <BloodPressureChart />
      <Vitals />
      <DiagnosticList />
      <LabResults />
    </div>
  );
};

export default MainContent;
