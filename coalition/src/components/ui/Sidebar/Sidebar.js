import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Patients</h2>
      {/* Replace this with a list of patient components */}
      <ul>
        <li>Emily Williams</li>
        <li>Ryan Johnson</li>
        <li>Brandon Mitchell</li>
        <li>Jessica Taylor</li>
        {/* Add more patients here */}
      </ul>
    </div>
  );
};

export default Sidebar;
