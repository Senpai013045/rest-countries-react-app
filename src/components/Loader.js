import React from "react";
import CenteredBackdrop from "./CenteredBackdrop";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <CenteredBackdrop>
      <figcaption>
        <figure className={styles.loader1}></figure>
      </figcaption>
    </CenteredBackdrop>
  );
};

export default Loader;
