import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import CountryContainer from "./CountryContainer";
import Card from "./Card";
import Form from "./Form";

const Home = ({ isLoading, isError, isSuccess, data, filterText }) => {
  const filterFunction = (country) => {
    return country.name.toLowerCase().includes(filterText);
  };
  return (
    <section
      style={{
        position: "absolute",
        left: "0",
        width: "100%",
        transition: "all 0.3s",
      }}
    >
      <Form />
      {isLoading && <Loader />}
      {isError && <Error error={"Couldn't reach the server"} />}
      {isSuccess && (
        <CountryContainer>
          {data.filter(filterFunction).map((d) => (
            <Card details={d} key={d.name} />
          ))}
        </CountryContainer>
      )}
    </section>
  );
};

export default Home;
