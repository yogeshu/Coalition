import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/icons/TestLogo.png"; // replace with your logo path
import userImage from "../../../assets/icons/userImage.png"; // replace with user image path
import setting from "../../../assets/icons/setting.png";
import kebab from "../../../assets/icons/kebab.png";

import overview from "../../../assets/icons/overview.svg";
import patients from "../../../assets/icons/patients.svg";
import schedule from "../../../assets/icons/schedule.svg";
import chatbubble from "../../../assets/icons/chatbubble.svg";
import creditcard from "../../../assets/icons/creditcard.svg";

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
      <div className={`${styles.navLinks} ${isNavOpen ? styles.show : ""}`}>
        <a href="#overview" className={styles.navLink}>
          <img src={overview} alt="overview" />{" "}
          <span className={styles.navlinkSpan}> Overview </span>
        </a>
        <a href="#patients" className={`${styles.navLink} ${styles.active}`}>
          {" "}
          <img src={patients} alt="Patients" />
          <span className={styles.navlinkSpan}> Patients </span>
        </a>
        <a href="#schedule" className={styles.navLink}>
          <img src={schedule} alt="Schedule" />
          <span className={styles.navlinkSpan}> Schedule </span>
        </a>
        <a href="#message" className={styles.navLink}>
          <img src={chatbubble} alt="Message" />
          <span className={styles.navlinkSpan}> Message </span>
        </a>
        <a href="#transactions" className={styles.navLink}>
          <img src={creditcard} alt="Transactions" />
          <span className={styles.navlinkSpan}> Transactions </span>
        </a>
      </div>
      <div className={styles.userProfile}>
        <img
          src={userImage}
          alt="Dr. Jose Simmons"
          className={styles.userImage}
        />
        <div className={styles.userInfo}>
          <span className={styles.userName}>Dr. Jose Simmons</span>
          <span className={styles.userRole}>General Practitioner</span>
        </div>
        <div className={styles.moreOptions}>
          <img src={setting} alt="settings" />{" "}
        </div>
        <div className={styles.moreOptions}>
          <img src={kebab} alt="settings" />{" "}
        </div>

        <div
          className={styles.burgerMenu}
          onClick={toggleNav}
          style={{
            display: isNavOpen ? "none" : "block",
          }}
        >
          ☰
        </div>
        <div
          className={styles.closeMenu}
          onClick={toggleNav}
          style={{
            display: isNavOpen ? "block" : "none",
          }}
        >
          X
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
