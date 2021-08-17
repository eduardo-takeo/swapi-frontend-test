import React from "react";

import styles from "./styles.module.scss";

function ErrorMessage() {
  return (
    <div className={styles.errorContainer}>
      <h1>
        Ooops, something went wrong :( <br /> Please try again later
      </h1>
    </div>
  );
}

export default ErrorMessage;
