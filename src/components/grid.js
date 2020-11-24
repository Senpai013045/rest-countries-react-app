import React from "react";
import styles from "./grid.module.css";

const Grid = (props) => {
  return <section className={styles.grid}>{props.children}</section>;
};

export default Grid;
