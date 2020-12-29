import React from "react";

const GlobalContext = React.createContext({
  setLightMode: () => {},
  lightMode: false,
  filterText: "",
  setFilterText: () => {},
});

export default GlobalContext;
