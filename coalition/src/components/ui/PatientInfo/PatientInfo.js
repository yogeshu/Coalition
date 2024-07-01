import React from 'react';
import styles from './PatientInfo.module.css';

const PatientInfo = () => {
  return (
    <div className={styles.patientInfo}>
      <img src="path/to/patient/image.jpg" alt="Patient" className={styles.patientImage} />
      <h3>Jessica Taylor</h3>
      <p>Date Of Birth: August 23, 1996</p>
      <p>Gender: Female</p>
      <p>Contact Info: (415) 555-1234</p>
      <p>Emergency Contacts: (415) 555-5678</p>
      <p>Insurance Provider: Sunrise Health Assurance</p>
      <button className={styles.showInfoButton}>Show All Information</button>
    </div>
  );
};

export default PatientInfo;
