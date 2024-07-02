import React from 'react';
import BloodPressureChart from '../BloodPressureChart/BloodPressureChart';
import DiagnosticList from '../DiagnosticList/DiagnosticList';
import styles from './MainContent.module.css';

const MainContent = ({getProfileData}) => {
  
   
  return (
  <div className={styles.mainContent}>
      <BloodPressureChart getProfileData={getProfileData}/>
      
      <DiagnosticList getProfileData={getProfileData} />
      
    </div>
  );
};

export default MainContent;
