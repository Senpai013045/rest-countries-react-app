import * as actionTypes from "./actionTypes";
const initialState = {
  theme: "dark",
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
    default:
      return state;
  }
};
export default reducer;
