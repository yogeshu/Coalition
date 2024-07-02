import React from 'react';
import styles from './PatientList.module.css';
import PatientItem from '../PatientItem/PatientItem';

const PatientList = ({ patients, searchQuery,selectedPatient, setSelectedPatient }) => {
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.patientList}>
      {filteredPatients.map((patient) => (
        <PatientItem key={patient.id} selectedPatient={selectedPatient} patient={patient} setSelectedPatient={setSelectedPatient}/>
      ))}
    </div>
  );
};

export default PatientList;
