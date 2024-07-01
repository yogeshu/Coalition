import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import searchbar from '../../../assets/icons/searchbar.svg';

const SearchBar = ({ onSearch }) => {
    const [open, setOpen] = useState(false);
  return (
   <>
    <input
      type="text"
      placeholder="Search patients"
      className={open ? styles.searchInput : styles.searchInputHidden}
      onChange={(e) => onSearch(e.target.value)}

    />
   <div className={styles.header}>
    <p className={
        !open ? styles.title : styles.titleHidden
    }> Patients </p>

    <div className={styles.searchIcon}>
      <img src={searchbar} alt="search icon" onClick={() => setOpen(!open)} />
    </div>
    </div>

   </>
  );
};

export default SearchBar;
