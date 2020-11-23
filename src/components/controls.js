import React, { useState } from "react";
import styles from "./controls.module.css";
import magnifyingGlass from "../assets/icons/basic_magnifier.svg";
import { setSelected } from "../store/actioncreators";
import { connect } from "react-redux";

const Controls = (props) => {
  const [toggled, setToggled] = useState(false);
  return (
    <form className={styles.controls}>
      <div className="searchArea">
        <label className={styles.label} htmlFor="search">
          <img
            className={styles.labelIcon}
            src={magnifyingGlass}
            alt="search"
          />
        </label>
        <input
          className={styles.input}
          id="search"
          placeholder="Search for a country..."
          type="text"
        />
      </div>
      <div className={styles.dropdownWrapper}>
        <label htmlFor="pick" onClick={() => setToggled(!toggled)}>
          {props.selected || "Filter by region"}
          <i className={toggled ? styles.on : null}>&#9660;</i>
        </label>
        <select
          id="pick"
          onChange={(e) => {
            props.setSelected(e.target.value);
          }}
          className={styles.dropdown}
          value={props.selected || " "}
        >
          {/* <option value="" defaultValue className={styles.hidden}>
            Filter by Region
          </option> */}
          <option className={styles.option} value="Africa">
            Africa
          </option>
          <option className={styles.option} value="America">
            America
          </option>
          <option className={styles.option} value="Asia">
            Asia
          </option>
          <option className={styles.option} value="Europe">
            Europe
          </option>
          <option className={styles.option} value="Oceania">
            Oceania
          </option>
        </select>
        <ul
          className={[
            styles.customDropdown,
            toggled ? null : styles.dropdownOff,
          ].join(" ")}
          onClick={() => {
            setToggled(false);
          }}
        >
          {["Africa", "America", "Asia", "Europe", "Oceania"].map((r) => (
            <li
              key={r}
              onClick={() => {
                props.setSelected(r);
              }}
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelected: (v) => dispatch(setSelected(v)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
