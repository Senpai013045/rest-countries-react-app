import React from "react";
import Controls from "./controls";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <Controls />
    </main>
  );
};

export default Main;
