import React from "react";
import styles from "./CountryContainer.module.css";

const CountryContainer = (props) => {
  return <div className={styles.countryContainer}>{props.children}</div>;
};

export default CountryContainer;
