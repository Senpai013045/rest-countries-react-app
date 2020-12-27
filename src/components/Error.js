import React from "react";
import CenteredBackdrop from "./CenteredBackdrop";
import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <CenteredBackdrop>
      <p className={styles.error}>{props.error.toString()}</p>
    </CenteredBackdrop>
  );
};

export default Error;
