import React, { useEffect, useState } from "react";
import Card from "./card";
import Controls from "./controls";
import Grid from "./grid";
import styles from "./main.module.css";

const Main = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <main className={styles.main}>
      <Controls />
      <Grid>
        {countries.map((item) => (
          <Card
            key={item.name}
            imageUrl={item.flag}
            name={item.name}
            capital={item.capital}
            population={item.population}
            region={item.region}
          />
        ))}
      </Grid>
    </main>
  );
};

export default Main;
