import * as actionTypes from "./actionTypes";
const initialState = {
  theme: "dark",
  selected: "",
  countries: [],
  filterText: "",
  filteredCountries: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      let newtheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newtheme);
      return {
        ...state,
        theme: newtheme,
      };
    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case actionTypes.SET_SELECTED:
      return {
        ...state,
        selected: action.payload.value,
      };
    case actionTypes.GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload.countries,
        filteredCountries: action.payload.countries,
      };
    case actionTypes.FILTER_COUNTRIES:
      return {
        ...state,
        filteredCountries: state.countries.filter((item) => {
          if (state.selected === "All" || "") {
            // return true;
            return (
              item.name
                .toLowerCase()
                .indexOf(state.filterText.toLowerCase()) !== -1
            );
          } else {
            return (
              item.region.indexOf(state.selected) !== -1 &&
              item.name
                .toLowerCase()
                .indexOf(state.filterText.toLowerCase()) !== -1
            );
          }
        }),
      };
    // case actionTypes.FILTER_COUNTRIES:
    //   return {
    //     ...state,
    //     filteredCountries: state.countries.filter((item) => {
    //       if (action.payload.region === "All") {
    //         return true;
    //       }
    //       return item.region.indexOf(action.payload.region) !== -1;
    //     }),
    //   };
    case actionTypes.SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload.text,
      };
    case actionTypes.SEARCH_COUNTRIES:
      return {
        ...state,
        filteredCountries: state.countries.filter((item) => {
          return (
            item.name
              .toLowerCase()
              .indexOf(action.payload.text.toLowerCase()) !== -1
          );
        }),
      };
    default:
      return state;
  }
};
export default reducer;
