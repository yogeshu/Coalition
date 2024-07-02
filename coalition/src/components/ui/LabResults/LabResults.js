import React from "react";
import styles from "./LabResults.module.css";
import download from "../../../assets/icons/download.svg";
const LabResults = ({getProfileData}) => {
  const labResultsData = getProfileData[0]?.lab_results;
  return (
    <div className={styles.labResults}>
      <h2>Lab Results</h2>
      <ul>
        {
          labResultsData.map((result, index) => {
            return (
              <li key={index}>
                <span>{result}</span>
                <img src={download} alt="download" />
              </li>
            );
          })
        }
       
      </ul>
    </div>
  );
};

export default LabResults;
