import React from "react";
import styles from "./AbsoluteWrapper.module.css";

const AbsoluteWrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default AbsoluteWrapper;
