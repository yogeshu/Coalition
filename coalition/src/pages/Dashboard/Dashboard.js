import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import Navbar from "../../components/ui/Navbar/Navbar";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import MainContent from "../../components/ui/MainContent/MainContent";
import PatientInfo from "../../components/ui/PatientInfo/PatientInfo";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientListInfo, setPatientListInfo] = useState(null);
  const fetchData = async () => {
    const apiUrl = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = "coalition";
    const password = "skills-test";
    const encodedCredentials = btoa(`${username}:${password}`);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      setData(data);
      setSelectedPatient(data[0].name);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const getProfileData = data?.filter(
    (patient) => patient.name === selectedPatient
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  // data exapmple =>
 

  const sidebarData = data.map((patient, index) => {
    return {
      id: index,
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      photo: patient.profile_picture,
    };
  });

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar
          sidebarData={sidebarData}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />
        <MainContent getProfileData={getProfileData}/>
        <PatientInfo  getProfileData={getProfileData}/>
      </div>
    </div>
  );
}

export default Dashboard;
