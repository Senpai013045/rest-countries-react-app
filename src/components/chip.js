import React, { useEffect, useState } from "react";
import styles from "./chip.module.css";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const Chip = (props) => {
  const history = useHistory();
  const [name, setName] = useState(null);
  useEffect(() => {
    setName(
      props.countries.find((country) => {
        return country.alpha3Code === props.code;
      })?.name || null
    );
  }, [props.countries, props.code]);
  if (props.countries.length === 0) {
    return <Redirect to="/" />;
  } else
    return (
      <button
        className={styles.chip}
        onClick={() => history.push(`/detail/${name}`)}
      >
        {name}
      </button>
    );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(Chip);
