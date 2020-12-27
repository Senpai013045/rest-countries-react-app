import React, { useState } from "react";
import { useQuery } from "react-query";
import CountryContainer from "./components/CountryContainer";
import Header from "./components/Header";
import GlobalContext from "./context/globalContext";
import { ReactQueryDevtools } from "react-query/devtools";
import Form from "./components/Form";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Card from "./components/Card";

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
  console.log(data);

  //how did you use context again?
  return (
    <GlobalContext.Provider value={{ setLightMode, lightMode }}>
      <main
        className={["App", lightMode ? "light-mode" : "dark-mode"].join(" ")}
      >
        <Header />
        <Form />
        {isLoading && <Loader />}
        {isError && <Error error={"Couldn't reach the server"} />}
        {isSuccess && (
          <CountryContainer>
            {data.map((d) => (
              <Card details={d} key={d.name} />
            ))}
          </CountryContainer>
        )}
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </GlobalContext.Provider>
  );
}

export default App;
