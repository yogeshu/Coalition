import React from "react";
import styles from "./DiagnosticList.module.css";

const DiagnosticList = ({ getProfileData }) => {
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
          {getProfileData[0]?.diagnostic_list.map((item, index) => {
            return (
              <tr key={index} className={styles.setLimit}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}

          <tr>
            <td>Asthma</td>
            <td>Recurrent episodes of bronchial constriction</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
