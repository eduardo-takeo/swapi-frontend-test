import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./styles.module.scss";

function LoadingMessage() {
  return (
    <div className={styles.loaderContainer}>
      <ClipLoader color="#ffe81f" />
    </div>
  );
}

export default LoadingMessage;
