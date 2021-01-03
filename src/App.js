import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Header from "./components/Header";
import GlobalContext from "./context/globalContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { Redirect, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Home from "./components/Home";
import { CSSTransition } from "react-transition-group";

const fetchFunction = async () => {
  const res = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code"
  );
  console.log("fetch function fired");
  return res.json();
};

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [selected, setSelected] = useState("All");

  const { data, isLoading, isSuccess, isError } = useQuery(
    "allCountries",
    fetchFunction
  );

  const [alpha3codeIndex, setAlpha3codeIndex] = useState({});

  useEffect(() => {
    const index = {};
    if (data) {
      data.forEach((c) => {
        index[c.alpha3Code] = c.name;
      });
      setAlpha3codeIndex(index);
    }
  }, [data]);

  const [filterText, setFilterText] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        setLightMode,
        lightMode,
        filterText,
        setFilterText,
        selected,
        setSelected,
        data,
      }}
    >
      <main
        className={["App", lightMode ? "light-mode" : "dark-mode"].join(" ")}
      >
        <Header />
        <Route exact path="/country/:countryName">
          {({ match }) => {
            return (
              <CSSTransition
                unmountOnExit
                in={match !== null}
                timeout={300}
                classNames="fade-right"
              >
                <DetailPage alpha3codeIndex={alpha3codeIndex} />
              </CSSTransition>
            );
          }}
        </Route>
        <Route exact path="/">
          {({ match }) => {
            return (
              <CSSTransition
                in={match !== null}
                classNames="fade-left"
                unmountOnExit
                timeout={300}
              >
                <Home
                  isError={isError}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
                  data={data}
                  filterText={filterText}
                  selected={selected}
                />
              </CSSTransition>
            );
          }}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </GlobalContext.Provider>
  );
}

export default App;
