import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./card";
import Controls from "./controls";
import Grid from "./grid";
import styles from "./main.module.css";
import { getAllCountries } from "../store/actioncreators";

const Main = (props) => {
  useEffect(() => {
    props.fetchAllCountries();
    // eslint-disable-next-line
  }, []);
  return (
    <main className={styles.main}>
      <Controls />
      <Grid>
        {props.countries.map((item) => (
          <Card
            hidden={!props.filteredCountries.includes(item)}
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

const mapStateToProps = (state) => {
  return {
    filteredCountries: state.filteredCountries,
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCountries: () => dispatch(getAllCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
