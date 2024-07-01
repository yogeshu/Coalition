import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import PatientList from '../PatientList/PatientList';
import SearchBar from '../SearchBar/SearchBar';

const Sidebar = () => {
  const patients = [
    { id: 1, name: 'Emily Williams', gender: 'Female', age: 18, photo: 'path/to/photo1.jpg' },
    { id: 2, name: 'Ryan Johnson', gender: 'Male', age: 45, photo: 'path/to/photo2.jpg' },
    { id: 3, name: 'Brandon Mitchell', gender: 'Male', age: 36, photo: 'path/to/photo3.jpg' },
    { id: 4, name: 'Jessica Taylor', gender: 'Female', age: 28, photo: 'path/to/photo4.jpg' },
    { id: 5, name: 'Samantha Johnson', gender: 'Female', age: 56, photo: 'path/to/photo5.jpg' },
    { id: 6, name: 'Ashley Martinez', gender: 'Female', age: 54, photo: 'path/to/photo6.jpg' },
    { id: 7, name: 'Olivia Brown', gender: 'Female', age: 32, photo: 'path/to/photo7.jpg' },
    { id: 8, name: 'Tyler Davis', gender: 'Male', age: 19, photo: 'path/to/photo8.jpg' },
    { id: 9, name: 'Kevin Anderson', gender: 'Male', age: 30, photo: 'path/to/photo9.jpg' },
    { id: 10, name: 'Dylan Thompson', gender: 'Male', age: 28, photo: 'path/to/photo10.jpg' }
  ];
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.sidebar}>
      <SearchBar onSearch={handleSearch} />
      <PatientList patients={patients} searchQuery={searchQuery} />
    </div>
  );
};

export default Sidebar;
