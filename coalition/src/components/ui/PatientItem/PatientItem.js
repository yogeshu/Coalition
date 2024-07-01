import React from 'react';
import styles from './PatientItem.module.css';
import sidekebab from '../../../assets/icons/sidekebab.svg';

const PatientItem = ({ patient }) => {
  return (
    <div className={styles.patientItem}>
      <img src={patient.photo} alt={patient.name} className={styles.avatar} />
      <div>
        <div className={styles.name}>{patient.name}</div>
        <div className={styles.details}>{patient.gender}, {patient.age}</div>
      </div>
      <button className={styles.moreButton}><img src={sidekebab} alt='sidekebabr'/></button>
    </div>
  );
};

export default PatientItem;
