import React from "react";

const GlobalContext = React.createContext({
  setLightMode: () => {},
  lightMode: false,
  filterText: "",
  setFilterText: () => {},
  selected: "All",
  setSelected: () => {},
  imageBlobIndex: {},
  setImageBlobIndex: () => {},
});

export default GlobalContext;
