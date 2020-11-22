import * as actionTypes from "./actionTypes";
const initialState = {
  theme: "dark",
  selected: null,
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
    default:
      return state;
  }
};
export default reducer;
