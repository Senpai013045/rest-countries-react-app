import React, { useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Header.module.css";
import { useHistory } from "react-router";
import GlobalContext from "../context/globalContext";

const Header = () => {
  const history = useHistory();
  const { setSelected, setFilterText } = useContext(GlobalContext);

  const clickHandler = () => {
    setSelected("All");
    setFilterText("");
    history.push("/");
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.primaryHeading} onClick={clickHandler}>
        Where in the world?
      </h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
