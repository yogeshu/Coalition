import React from 'react';
import styles from './DiagnosticList.module.css';

const DiagnosticList = () => {
  return (
    <div className={styles.diagnosticList}>
      <h2>Diagnostic List</h2>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hypertension</td>
            <td>Chronic high blood pressure</td>
            <td>Under Observation</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
