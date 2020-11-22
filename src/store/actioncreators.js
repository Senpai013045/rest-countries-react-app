import * as actionTypes from "./actionTypes";

/*function actualThemeSwitcherFunction() {
  return {
    type: actionTypes.SWITCH_THEME,
  };
}

export const switchTheme = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(actualThemeSwitcherFunction());
    }, 1000);
  };
};
*/

export const switchTheme = () => {
  return {
    type: actionTypes.SWITCH_THEME,
  };
};

export const syncLocalStorageThemeToState = () => {
  let theme = localStorage.getItem("theme") || "light";
  return {
    type: actionTypes.SET_THEME,
    payload: {
      theme: theme,
    },
  };
};

export const setSelected = (value) => {
  return {
    type: actionTypes.SET_SELECTED,
    payload: {
      value: value,
    },
  };
};
