import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/header-logo.png" alt="Logo" />
      <img src="/header-photo.png" alt="Logo" />
    </header>
  );
};
export default Header;
