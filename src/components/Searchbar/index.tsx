import React from "react";

import styles from "./styles.module.scss";

interface SearchbarProps {
  filterFilms: (searchTerm: string) => void;
  filterOption: string;
  setFilterOption: (option: string) => void;
}

function Searchbar({
  filterFilms,
  filterOption,
  setFilterOption,
}: SearchbarProps) {
  return (
    <section className={styles.searchbarContainer}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchbar}
        onChange={(e) => filterFilms(e.target.value)}
      />
      <ul className={styles.categoriesContainer}>
        <li
          className={filterOption === "films" ? styles.active : ""}
          onClick={() => setFilterOption("films")}
        >
          Films
        </li>
        <li
          className={filterOption === "characters" ? styles.active : ""}
          onClick={() => setFilterOption("characters")}
        >
          Characters
        </li>
      </ul>
    </section>
  );
}

export default Searchbar;
