import React from "react";
import Dropdown from "./Dropdown";
import styles from "./Form.module.css";
import icon from "../assets/icons/basic_magnifier.svg";

const Form = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.inputHolder}>
        <img src={icon} className={styles.icon} alt="search-icon" />
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a country..."
        />
      </div>

      <Dropdown />
    </form>
  );
};

export default Form;
