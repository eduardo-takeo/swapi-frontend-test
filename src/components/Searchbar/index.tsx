import React from "react";

import styles from "./styles.module.scss";

function Searchbar() {
  return (
    <section className={styles.searchbarContainer}>
      <input type="text" placeholder="Search" className={styles.searchbar} />
      <ul className={styles.categoriesContainer}>
        <li>
          <div>Films</div>
        </li>
        <li>
          <div>Characters</div>
        </li>
      </ul>
    </section>
  );
}

export default Searchbar;
