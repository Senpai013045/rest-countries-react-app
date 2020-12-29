import React, { useState } from "react";
import { useQuery } from "react-query";
//import CountryContainer from "./components/CountryContainer";
import Header from "./components/Header";
import GlobalContext from "./context/globalContext";
import { ReactQueryDevtools } from "react-query/devtools";
// import Form from "./components/Form";
// import Loader from "./components/Loader";
// import Error from "./components/Error";
// import Card from "./components/Card";
import { Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Home from "./components/Home";

const fetchFunction = async () => {
  const res = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code"
  );
  console.log("fetch function fired");
  return res.json();
  //will be using react query, it uses the promise
};

function App() {
  const [lightMode, setLightMode] = useState(false);

  const { data, isLoading, isSuccess, isError } = useQuery(
    "allCountries",
    fetchFunction
  );
  //needs some setup on index.js

  //filtering
  const [filterText, setFilterText] = useState("");

  // const filterFunction = (country) => {
  //   return country.name.toLowerCase().includes(filterText);
  // };

  //how did you use context again?
  return (
    <GlobalContext.Provider
      value={{ setLightMode, lightMode, filterText, setFilterText }}
    >
      <main
        className={["App", lightMode ? "light-mode" : "dark-mode"].join(" ")}
      >
        <Header />
        <Route exact path="/country/:countryName">
          <DetailPage />
        </Route>
        <Route path="/">
          <Home
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
            data={data}
            filterText={filterText}
          />
          {/* <Form />
          {isLoading && <Loader />}
          {isError && <Error error={"Couldn't reach the server"} />}
          {isSuccess && (
            <CountryContainer>
              {data.filter(filterFunction).map((d) => (
                <Card details={d} key={d.name} />
              ))}
            </CountryContainer>
          )} */}
        </Route>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </GlobalContext.Provider>
  );
}

export default App;
