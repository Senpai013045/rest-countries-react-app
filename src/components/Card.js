import React from "react";
import { useQuery } from "react-query";
import { CSSTransition } from "react-transition-group";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";

const Card = ({ details }) => {
  const history = useHistory();
  const { data } = useQuery(["image", details.flag], async () => {
    console.log("image fetch fired");
    const response = await fetch(details.flag);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    return objectUrl;
  });
  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames={{
        enter: styles.enter,
        enterActive: styles.entering,
        exit: styles.exiting,
        exitActive: styles.exited,
      }}
    >
      <section
        className={styles.card}
        onClick={() => history.push("/country/nepal")}
      >
        <figure
          className={styles.imageHolder}
          style={{ backgroundImage: `url(${data})` }}
        ></figure>
        <div className={styles.details}>
          <h3 className={styles.card__header}>{details.name}</h3>
          <p className={styles.card__detail}>
            <span className={styles.card__detail__header}>Population: </span>
            <span className={styles.card__detail__data}>
              {details.population.toLocaleString()}
            </span>
          </p>
          <p className={styles.card__detail}>
            <span className={styles.card__detail__header}>Region: </span>
            <span className={styles.card__detail__data}>{details.region}</span>
          </p>
          <p className={styles.card__detail}>
            <span className={styles.card__detail__header}>Capital: </span>
            <span className={styles.card__detail__data}>{details.capital}</span>
          </p>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Card;
