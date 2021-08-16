import React, { useEffect, useState } from "react";
import FilmsShowcase from "../../components/FilmsShowcase";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import { IFilm } from "../../interfaces/Film";

import styles from "./styles.module.scss";

//! Remove mock when API call is implemented
// import mockedFilms from "../../mocks/films.json";

function Main() {
  const [films, setFilms] = useState<IFilm[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => setFilms(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />

      <main className={styles.mainContainer}>
        <Searchbar />

        <FilmsShowcase filmsList={films} />
      </main>
    </div>
  );
}

export default Main;
