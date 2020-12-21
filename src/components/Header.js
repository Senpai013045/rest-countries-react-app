import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.primaryHeading}>Where in the world?</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
