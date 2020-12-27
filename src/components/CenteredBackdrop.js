import React from "react";
import styles from "./CenteredBackdrop.module.css";

const CenteredBackdrop = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default CenteredBackdrop;
