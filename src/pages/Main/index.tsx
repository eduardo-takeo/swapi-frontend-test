import React, { useState, useEffect } from "react";
import EmptyPrompt from "../../components/EmptyPrompt";
import ErrorMessage from "../../components/ErrorMessage";
import FilmsShowcase from "../../components/FilmsShowcase";
import Header from "../../components/Header";
import LoadingMessage from "../../components/LoadingMessage";
import Searchbar from "../../components/Searchbar";
import { useFilms } from "../../contexts/FilmsContext";
import { IFilm } from "../../interfaces/Film";

import styles from "./styles.module.scss";

function Main() {
  const { films, isLoading, hasError } = useFilms();
  const [displayingFilms, setDisplayingFilms] = useState<IFilm[]>([]);

  useEffect(() => {
    setDisplayingFilms(films);
  }, [films]);

  function filterFilms(searchTerm: string) {
    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayingFilms(filteredFilms);
  }

  return (
    <div>
      <Header />

      <main className={styles.mainContainer}>
        <Searchbar filterFilms={filterFilms} />

        {displayingFilms.length > 0 && (
          <FilmsShowcase filmsList={displayingFilms} />
        )}
        {displayingFilms.length < 1 && !isLoading && <EmptyPrompt />}

        {isLoading && <LoadingMessage />}
        {hasError && <ErrorMessage />}
      </main>
    </div>
  );
}

export default Main;
