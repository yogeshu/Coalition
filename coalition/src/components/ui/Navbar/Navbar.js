import React,{useState} from 'react';
import styles from './Navbar.module.css';
import logo from '../../../assets/icons/TestLogo.png'; // replace with your logo path
import userImage from '../../../assets/icons/userImage.png'; // replace with user image path
import setting from '../../../assets/icons/setting.png'
import kebab from '../../../assets/icons/kebab.png'


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Tech.Care" />
        </div>
        <div className={`${styles.navLinks} ${isNavOpen ? styles.show : ''}`}>
          <a href="#overview" className={styles.navLink}>Overview</a>
          <a href="#patients" className={`${styles.navLink} ${styles.active}`}>Patients</a>
          <a href="#schedule" className={styles.navLink}>Schedule</a>
          <a href="#message" className={styles.navLink}>Message</a>
          <a href="#transactions" className={styles.navLink}>Transactions</a>
        </div>
        <div className={styles.userProfile}>
          <img src={userImage} alt="Dr. Jose Simmons" className={styles.userImage} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>Dr. Jose Simmons</span>
            <span className={styles.userRole}>General Practitioner</span>
          </div>
<div className={styles.moreOptions}><img src={setting} alt='settings'/> </div>
<div className={styles.moreOptions}><img src={kebab} alt='settings'/> </div>

          <div className={styles.burgerMenu} onClick={toggleNav}>☰</div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
