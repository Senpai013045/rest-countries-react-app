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

export const requestToApi = (d) => {
  return {
    type: actionTypes.GET_ALL_COUNTRIES,
    payload: {
      countries: d,
    },
  };
};

export const getAllCountries = () => {
  return function (dispatch) {
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(requestToApi(data));
        dispatch(filterCountries());
      });
  };
};

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

export const filterCountries = () => {
  return {
    type: actionTypes.FILTER_COUNTRIES,
  };
};
// export const filterCountries = (r) => {
//   return {
//     type: actionTypes.FILTER_COUNTRIES,
//     payload: {
//       region: r,
//     },
//   };
// };

export const searchCountries = (t) => {
  return {
    type: actionTypes.SEARCH_COUNTRIES,
    payload: {
      text: t,
    },
  };
};

export const setFilterText = (t) => {
  return {
    type: actionTypes.SET_FILTER_TEXT,
    payload: {
      text: t,
    },
  };
};
