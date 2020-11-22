import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Main from "./components/main";
import { syncLocalStorageThemeToState } from "./store/actioncreators";

function App(props) {
  //theme switching
  useEffect(() => {
    props.syncTheme();
    if (props.theme === "light") {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
      }
      document.body.classList.add("light-mode");
    } else {
      if (document.body.classList.contains("light-mode")) {
        document.body.classList.remove("light-mode");
      }
      document.body.classList.add("dark-mode");
    }
    // eslint-disable-next-line
  });
  //conditionally select the root variables

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    syncTheme: () => dispatch(syncLocalStorageThemeToState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
