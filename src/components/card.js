import React from "react";
import styles from "./card.module.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/detail/${props.name}`)}
      className={[styles.card, props.hidden ? styles.hidden : null].join(" ")}
    >
      <div
        className={styles.imageHolder}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className={styles.detailWrapper}>
        <h4 className={styles.name}>{props.name}</h4>
        <p className={styles.detail}>
          Population: <span className={styles.result}>{props.population}</span>
        </p>
        <p className={styles.detail}>
          Region: <span className={styles.result}>{props.region}</span>
        </p>
        <p className={styles.detail}>
          Capital: <span className={styles.result}>{props.capital}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
