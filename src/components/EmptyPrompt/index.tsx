import React from "react";

import styles from "./styles.module.scss";

function EmptyPrompt() {
  return (
    <div className={styles.emptyMessageContainer}>
      <h1>No results found</h1>
    </div>
  );
}

export default EmptyPrompt;
