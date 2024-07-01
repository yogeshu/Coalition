import React from 'react';
import styles from './LabResults.module.css';

const LabResults = () => {
  return (
    <div className={styles.labResults}>
      <h2>Lab Results</h2>
      <ul>
        <li>Blood Tests</li>
        <li>CT Scans</li>
        <li>Radiology Reports</li>
        {/* Add more results here */}
      </ul>
    </div>
  );
};

export default LabResults;
