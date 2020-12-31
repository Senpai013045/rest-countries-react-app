import React from "react";
import { Redirect, useHistory, useParams } from "react-router";
import Button from "./Button";
import styles from "./DetailPage.module.css";

const DetailPage = (props) => {
  const history = useHistory();
  const { countryName } = useParams();

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
      <Button _onClick={history.goBack}>Back</Button>
    </section>
  );
};

export default DetailPage;
