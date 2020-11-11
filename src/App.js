import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  switchTheme,
  syncLocalStorageThemeToState,
} from "./store/actioncreators";

function App(props) {
  useEffect(() => {
    props.syncTheme();
    // eslint-disable-next-line
  }, []);
  return (
    <button onClick={props.switchTheme}>{props.theme} mode selected</button>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchTheme: () => dispatch(switchTheme()),
    syncTheme: () => dispatch(syncLocalStorageThemeToState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
