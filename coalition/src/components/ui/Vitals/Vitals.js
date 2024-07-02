import React from 'react';
import styles from './Vitals.module.css';
 import respiratoryrate from '../../../assets/icons/respiratoryrate.png';
 import ArrowDown from '../../../assets/icons/ArrowDown.svg';
 import HeartBPM from '../../../assets/icons/HeartBPM.png';
 import temperature from '../../../assets/icons/temperature.png';
const Vitals = () => {
  return (
    <div className={styles.vitals}>
      <div className={styles.vital} style={{ background: "#E0F3FA"}}>
        <img src={respiratoryrate}  alt="Respiratory Rate" />
        <h3>Respiratory Rate</h3>
        <p>20 bpm</p>
        <h6>Normal </h6> 
      </div>
      <div className={styles.vital} style={{background: "#FFE6E9 "}}>
      <img src={temperature}  alt="Temperature" />

        <h3>Temperature</h3>
        <p>98.6°F</p>
        <h6>Normal </h6> 
      </div>
      <div className={styles.vital} style={{background: "#FFE6F1  "}}>
      <img src={HeartBPM}  alt="Heart Rate" />
        <h3>Heart Rate</h3>
        <p>78 bpm</p>
        <h6> <img src={ArrowDown} alt='down arrow'/> <span className={styles.vitalSpan}>Lower than Average </span>  </h6> 
      </div>
    </div>
  );
};

export default Vitals;
