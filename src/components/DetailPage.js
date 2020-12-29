import React from "react";
import { useHistory } from "react-router";
import Button from "./Button";
import styles from "./DetailPage.module.css";

const DetailPage = (props) => {
  const history = useHistory();

  return (
    <section
      className={styles.page}
      style={{ position: "absolute", left: "0", width: "100%" }}
    >
      <Button _onClick={history.goBack}>Back</Button>
    </section>
  );
};

export default DetailPage;
