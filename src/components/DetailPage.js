import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Redirect, useHistory, useLocation, useParams } from "react-router";
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
  const location = useLocation();

  //console.log(location.blob);

  // useEffect(() => {
  //   fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
  // }, [countryName]);

  const { data, isError, isLoading, isSuccess } = useQuery(
    ["detailFetcher", countryName],
    () => fetchDetailsFunction(countryName)
  );

  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    if (data) {
      setCountryDetails(data[0]);
    }
  }, [data]);

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
      {isSuccess && countryDetails && (
        <section className={styles.container}>
          <figure
            className={styles.imageHolder}
            style={{
              backgroundImage: `url(${location.blob})`,
              backgroundSize:
                countryDetails.name === "Nepal" ? "contain" : "cover",
            }}
          ></figure>
          <div className={styles.details}>
            <h2 className={styles.h2}>{countryDetails.name}</h2>
            <ul className={styles.ul}>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Native Name:
                <span className={styles.presenter}>
                  {countryDetails.nativeName}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Population:
                <span className={styles.presenter}>
                  {countryDetails.population}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Region:
                <span className={styles.presenter}>
                  {countryDetails.region}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Sub Region:
                <span className={styles.presenter}>
                  {countryDetails.subregion}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Capital:
                <span className={styles.presenter}>
                  {countryDetails.capital}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Top Level Domain:
                <span className={styles.presenter}>
                  {countryDetails.topLevelDomain}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Currencies:
                <span className={styles.presenter}>
                  {countryDetails.currencies.map((cur, i) => {
                    if (i === countryDetails.currencies.length - 1) {
                      return cur.name;
                    } else {
                      return cur.name + ", ";
                    }
                  })}
                </span>
              </li>
              {/*----------------------------------*/}
              <li className={styles.li}>
                Languages:
                <span className={styles.presenter}>
                  {countryDetails.languages.map((lang, i) => {
                    if (i === countryDetails.languages.length - 1) {
                      return lang.name;
                    } else {
                      return lang.name + ", ";
                    }
                  })}
                </span>
              </li>
              {/*----------------------------------*/}
            </ul>
          </div>
        </section>
      )}
    </section>
  );
};

export default DetailPage;
