import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useHistory, useParams } from "react-router-dom";
import Chip from "./chip";
import Loader from "../components/loader";

const Detail = (props) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  let history = useHistory();
  let { country } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .then((r) => r.json())
      .then((d) => {
        setDetail(d[0]);
        setLoading(false);
      });
  }, [country]);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className={styles.main}>
        <button onClick={history.goBack} className={styles.btn}>
          <span className={styles.arrow}>&larr;</span>Back
        </button>
        <section className={styles.details}>
          <figure className={styles.flagHolder}>
            <img src={detail.flag} alt="flag" />
          </figure>
          <div className={styles.textHolder}>
            <h3 className={styles.name}>{detail.name}</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <h5>Native Name:</h5> <p>{detail.nativeName}</p>
              </li>
              <li className={styles.listItem}>
                <h5>Top Level Domain:</h5> <p>{detail.topLevelDomain}</p>
              </li>
              <li className={styles.listItem}>
                <h5>Population:</h5> <p>{detail.population.toLocaleString()}</p>
              </li>
              <li className={styles.listItem}>
                <h5>Currencies:</h5> <p>{detail.currencies[0].name}</p>
              </li>
              <li className={styles.listItem}>
                <h5>Region:</h5> <p>{detail.region}</p>
              </li>
              <li className={styles.listItem}>
                <h5>Languages:</h5>
                <p>
                  {detail.languages.map((item) => {
                    return (
                      <span key={item.name}>
                        {item.name}{" "}
                        {detail.languages.indexOf(item) !==
                        detail.languages.length - 1
                          ? ", "
                          : null}
                      </span>
                    );
                  })}
                </p>
              </li>
              <li className={styles.listItem}>
                <h5>Sub Region:</h5> <p>{detail.subregion}</p>
              </li>
              <li className={styles.listItem}>
                <h5>Capital:</h5> <p>{detail.capital}</p>
              </li>
            </ul>

            {detail.borders.length !== 0 ? (
              <aside className={styles.border}>
                <h5>Border Countries:</h5>
                {detail.borders.map((item) => (
                  <Chip key={item} code={item} />
                ))}
              </aside>
            ) : null}
          </div>
        </section>
      </main>
    );
  }
};

export default Detail;
