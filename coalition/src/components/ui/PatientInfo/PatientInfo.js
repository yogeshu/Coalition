import React from "react";
import styles from "./PatientInfo.module.css";
import profile from "../../../assets/icons/Jessica.png";
import BirthIcon from "../../../assets/icons/BirthIcon.png";
import FemaleIcon from "../../../assets/icons/FemaleIcon.png";
import PhoneIcon from "../../../assets/icons/PhoneIcon.png";
import InsuranceIcon from "../../../assets/icons/InsuranceIcon.png";
import LabResults from "../LabResults/LabResults";

const PatientInfo = ({getProfileData}) => { 


  
  return (
  <div className={styles.patientInfoContainer}>
    <div className={styles.patientInfo}>
      <img src={getProfileData[0]?.profile_picture} alt="Patient" className={styles.patientImage} />
      <h3 className={styles.patientName}>{getProfileData[0]?.name || "NA"} </h3>
      <div className={styles.info}>      <div className={styles.container}>
        <img src={BirthIcon} className={styles.icon} size={24} />
        <div className={styles.textContainer}>
          <div className={styles.label}>Date Of Birth</div>
          <div className={styles.date}>{getProfileData[0]?.date_of_birth || "NA"}</div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={FemaleIcon} className={styles.icon} size={24} />
        <div className={styles.textContainer}>
          <div className={styles.label}>Gender</div>
          <div className={styles.date}>{getProfileData[0]?.gender || "NA"}</div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={PhoneIcon} className={styles.icon} size={24} />
        <div className={styles.textContainer}>
          <div className={styles.label}>Contact Info.</div>
          <div className={styles.date}>{getProfileData[0]?.phone_number || "NA"}</div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={PhoneIcon} className={styles.icon} size={24} />
        <div className={styles.textContainer}>
          <div className={styles.label}>Emergency Contacts</div>
          <div className={styles.date}>{getProfileData[0]?.emergency_contact || "NA"}</div>
        </div>
      </div>
      <div className={styles.container}>
        <img src={InsuranceIcon} className={styles.icon} size={24} />
        <div className={styles.textContainer}>
          <div className={styles.label}>Insurance Provider</div>
          <div className={styles.date}>{getProfileData[0]?.insurance_type || "NA"}</div>
        </div>
      </div>
      <button className={styles.showInfoButton}>Show All Information</button>
      </div>

    </div>
    <LabResults getProfileData={getProfileData}/>
    </div>
  );
};

export default PatientInfo;
