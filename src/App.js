import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import { syncLocalStorageThemeToState } from "./store/actioncreators";

function App(props) {
  useEffect(() => {
    props.syncTheme();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    syncTheme: () => dispatch(syncLocalStorageThemeToState()),
  };
};

export default connect(null, mapDispatchToProps)(App);
