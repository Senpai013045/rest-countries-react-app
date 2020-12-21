import React from "react";

const GlobalContext = React.createContext({
  setLightMode: () => {},
  lightMode: false,
});

export default GlobalContext;
