import React from "react";
import moon from "../assets/icons/weather_moon.svg";
import sun from "../assets/icons/weather_sun.svg";
import { connect } from "react-redux";
import { switchTheme } from "../store/actioncreators";
import styles from "./header.module.css";

const Header = (props) => {
  let whatWeRender;
  if (props.theme === "dark") {
    whatWeRender = (
      <>
        <img src={sun} alt="sun" /> <span>Light mode</span>
      </>
    );
  } else {
    whatWeRender = (
      <>
        <img src={moon} alt="moon" /> <span>Dark mode</span>
      </>
    );
  }

  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={props.switchTheme}>{whatWeRender}</button>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    switchTheme: () => dispatch(switchTheme()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
