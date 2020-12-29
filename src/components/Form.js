import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import styles from "./Form.module.css";
import icon from "../assets/icons/basic_magnifier.svg";
import GlobalContext from "../context/globalContext";

const Form = () => {
  const { setFilterText, filterText } = useContext(GlobalContext);
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.inputHolder}>
        <img src={icon} className={styles.icon} alt="search-icon" />
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a country..."
          onChange={(e) => setFilterText(e.target.value.toLowerCase())}
          value={filterText}
        />
      </div>

      <Dropdown />
    </form>
  );
};

export default Form;
