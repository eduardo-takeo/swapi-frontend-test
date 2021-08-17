import React from "react";

import styles from "./styles.module.scss";

interface SearchbarProps {
  filterFilms: (searchTerm: string) => void;
}

function Searchbar({ filterFilms }: SearchbarProps) {
  return (
    <section className={styles.searchbarContainer}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchbar}
        onChange={(e) => filterFilms(e.target.value)}
      />
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
