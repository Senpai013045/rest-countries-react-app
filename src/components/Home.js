import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import CountryContainer from "./CountryContainer";
import Card from "./Card";
import Form from "./Form";

const Home = ({
  isLoading,
  isError,
  isSuccess,
  data,
  filterText,
  selected,
}) => {
  const filterFunction = (country) => {
    const doesMatch = country.name.toLowerCase().includes(filterText);
    const isSelected =
      selected === "All" ? true : selected === country.region ? true : false;
    return doesMatch && isSelected;
  };
  return (
    <section
      style={{
        position: "absolute",
        left: "0",
        width: "100%",
        transition: "all 0.5s",
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
