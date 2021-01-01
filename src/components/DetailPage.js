import React from "react";
import { useQuery } from "react-query";
import { Redirect, useHistory, useParams } from "react-router";
import Button from "./Button";
import styles from "./DetailPage.module.css";
import Error from "./Error";
import Loader from "./Loader";

const fetchDetailsFunction = async (cn) => {
  console.log("detailFetcher Fired");
  if (!cn) {
    return;
  }
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${cn}?fullText=true`
  );
  return response.json();
  //has to return a promise
};

const DetailPage = (props) => {
  const history = useHistory();
  const { countryName } = useParams();

  // useEffect(() => {
  //   fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
  // }, [countryName]);

  const { data, isError, isLoading, isSuccess } = useQuery(
    ["detailFetcher", countryName],
    () => fetchDetailsFunction(countryName)
  );

  if (!countryName) {
    return <Redirect to="/" />;
  }

  return (
    <section
      className={styles.page}
      style={{
        position: "absolute",
        left: "0",
        width: "100%",
        transition: "all 0.3s",
      }}
    >
      <Button _onClick={history.goBack}>
        <span className={styles.icon}> &larr; </span>
        Back
      </Button>
      {isError && <Error />}
      {isLoading && <Loader />}
      {isSuccess && JSON.stringify(data)}
    </section>
  );
};

export default DetailPage;
