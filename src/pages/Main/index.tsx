import React, { useEffect, useState } from "react";
import EmptyPrompt from "../../components/EmptyPrompt";
import ErrorMessage from "../../components/ErrorMessage";
import FilmsShowcase from "../../components/FilmsShowcase";
import Header from "../../components/Header";
import LoadingMessage from "../../components/LoadingMessage";
import Searchbar from "../../components/Searchbar";
import { IFilm } from "../../interfaces/Film";

import styles from "./styles.module.scss";

function Main() {
  const [allFilmsList, setAllFilmsList] = useState<IFilm[]>([]);
  const [films, setFilms] = useState<IFilm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchFilms() {
      setIsLoading(true);

      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setAllFilmsList(data.results);
        setFilms(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      }

      setIsLoading(false);
    }

    fetchFilms();
  }, []);

  function filterFilms(searchTerm: string) {
    const filteredFilms = allFilmsList.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilms(filteredFilms);
  }

  return (
    <div>
      <Header />

      <main className={styles.mainContainer}>
        <Searchbar filterFilms={filterFilms} />

        {films.length > 0 && <FilmsShowcase filmsList={films} />}
        {films.length < 1 && !isLoading && <EmptyPrompt />}

        {isLoading && <LoadingMessage />}
        {error && <ErrorMessage />}
      </main>
    </div>
  );
}

export default Main;
