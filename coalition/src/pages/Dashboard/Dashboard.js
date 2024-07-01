import React from 'react'
import styles from './Dashboard.module.css'
import Navbar from '../../components/ui/Navbar/Navbar'
import Sidebar from '../../components/ui/Sidebar/Sidebar'
import MainContent from '../../components/ui/MainContent/MainContent'
import PatientInfo from '../../components/ui/PatientInfo/PatientInfo'

function Dashboard() {
  return (
    <div className={styles.container}>


        
        <Navbar/>
        <div className={styles.content}>
          <Sidebar/>
          <MainContent/>
          <PatientInfo/>
        </div>

    </div>
  )
}

export default Dashboard