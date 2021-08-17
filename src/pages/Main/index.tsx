import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import FilmsShowcase from "../../components/FilmsShowcase";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import { IFilm } from "../../interfaces/Film";

import styles from "./styles.module.scss";

function Main() {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchFilms() {
      setIsLoading(true);

      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setIsLoading(false);
        setFilms(data.results);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.error(error);
      }
    }

    fetchFilms();
  }, []);

  return (
    <div>
      <Header />

      <main className={styles.mainContainer}>
        <Searchbar />

        <FilmsShowcase filmsList={films} />

        {isLoading && <h1>Loading....</h1>}
        {error && <ErrorMessage />}
      </main>
    </div>
  );
}

export default Main;
