import React from 'react';
import styles from './Vitals.module.css';
import respiratoryrate from '../../../assets/icons/respiratoryrate.png';
import ArrowDown from '../../../assets/icons/ArrowDown.svg';
import HeartBPM from '../../../assets/icons/HeartBPM.png';
import temperature from '../../../assets/icons/temperature.png';

const Vitals = ({ filteredData }) => {
  const latestData = filteredData[filteredData.length - 1];

  return (
    <div className={styles.vitals}>
      <div className={styles.vital} style={{ background: "#E0F3FA" }}>
        <img src={respiratoryrate} alt="Respiratory Rate" />
        <h3>Respiratory Rate</h3>
        <p>{latestData?.respiratory_rate_value || "NA"} bpm</p>
        <h6>{latestData?.respiratory_rate_levels || "NA"}</h6>
      </div>
      <div className={styles.vital} style={{ background: "#FFE6E9" }}>
        <img src={temperature} alt="Temperature" />
        <h3>Temperature</h3>
        <p>{latestData?.temperature_value || "NA"}°F</p>
        <h6>{latestData?.temperature_levels || "NA"}</h6>
      </div>
      <div className={styles.vital} style={{ background: "#FFE6F1" }}>
        <img src={HeartBPM} alt="Heart Rate" />
        <h3>Heart Rate</h3>
        <p>{latestData?.heart_rate_value || "NA"} bpm</p>
        <h6>
          <img src={ArrowDown} alt='down arrow' />
          <span className={styles.vitalSpan}>{latestData?.heart_rate_levels || "NA"}</span>
        </h6>
      </div>
    </div>
  );
};

export default Vitals;
