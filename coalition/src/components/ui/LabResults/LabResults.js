import React from "react";
import styles from "./LabResults.module.css";
import download from "../../../assets/icons/download.svg";
const LabResults = () => {
  return (
    <div className={styles.labResults}>
      <h2>Lab Results</h2>
      <ul>
        <li>
          {" "}
          <span> Blood Tests </span>
          <img src={download} alt="download" />
        </li>
        <li>
          {" "}
          <span> CT Scans </span>
          <img src={download} alt="download" />
        </li>
        <li>
          {" "}
          <span> Radiology Reports </span>
          <img src={download} alt="download" />
        </li>
        <li>
          {" "}
          <span> X-Rays </span>
          <img src={download} alt="download" />
        </li>
        <li>
          {" "}
          <span> Urine Tests </span>
          <img src={download} alt="download" />
        </li>
        {/* Add more results here */}
      </ul>
    </div>
  );
};

export default LabResults;
