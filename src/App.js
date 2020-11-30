import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Main from "./components/main";
import { syncLocalStorageThemeToState } from "./store/actioncreators";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/detail";

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
  });
  //conditionally select the root variables

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/detail/:country">
            <Detail />
          </Route>
          <Route path="*">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
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
