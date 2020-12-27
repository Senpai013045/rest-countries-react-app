import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import styles from "./Dropdown.module.css";
const regions = ["All", "Africa", "America", "Asia", "Europe", "Ocenia"];

const Dropdown = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [selected, setSelected] = useState("All");

  const toggleDropdownHandler = () => setShowDropDown((prev) => !prev);
  const hideDropdown = () => setShowDropDown(false);
  return (
    <>
      <div className={styles.wrapper} onClick={toggleDropdownHandler}>
        <h4 className={styles.label}>
          <span style={{ pointerEvents: "none" }}>
            {selected === "All" ? "Filter by region" : selected}
          </span>
          <figure
            className={[
              styles.figure,
              showDropdown ? null : styles.rotate,
            ].join(" ")}
          >
            &#9660;
          </figure>
        </h4>
        <CSSTransition
          in={showDropdown}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
        >
          <ul className={styles.ul}>
            {regions.map((item) => (
              <li
                className={styles.li}
                onClick={() => setSelected(item)}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </CSSTransition>
      </div>
      {showDropdown ? <Backdrop clicked={hideDropdown} /> : null}
    </>
  );
};

export default Dropdown;
