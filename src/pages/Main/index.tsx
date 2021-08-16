import React from "react";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";

import styles from "./styles.module.scss";

function Main() {
  return (
    <div>
      <Header />

      <main className={styles.mainContainer}>
        <Searchbar />
      </main>
    </div>
  );
}

export default Main;
