import React, { useContext } from "react";
import styles from "./ThemeSwitcher.module.css";
import { ReactComponent as Sun } from "../assets/icons/weather_sun.svg";
import { ReactComponent as Moon } from "../assets/icons/weather_moon.svg";
import GlobalContext from "../context/globalContext";

const ThemeSwitcher = () => {
  const globalContext = useContext(GlobalContext);
  return (
    <div
      className={styles.container}
      onClick={() => globalContext.setLightMode(!globalContext.lightMode)}
    >
      <figure className={styles.iconHolder}>
        {/* <img
          className={styles.icon}
          src={globalContext.lightMode ? sun : moon}
          alt="icon"
        /> */}
        {globalContext.lightMode ? (
          <Sun className={styles.icon} />
        ) : (
          <Moon className={styles.icon} />
        )}
      </figure>
      <span className={styles.modeName}>
        {globalContext.lightMode ? "Dark mode" : "Light mode"}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
