import React from "react";
import { useState } from "react";
import { IFilm } from "../../interfaces/Film";

import styles from "./styles.module.scss";

interface FilmDropdownProps {
  film: IFilm;
}

function FilmDropdown({ film }: FilmDropdownProps) {
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.filmContainer}
        onClick={() => setIsDetailsVisible(!isDetailsVisible)}
      >
        <h1>{film.title}</h1>
        <p>{film.opening_crawl}</p>
      </div>
      {isDetailsVisible && (
        <div className={styles.detailsContainer}>
          <h2>Episode {film.episode_id}</h2>
          <span>
            <strong>Title:</strong> {film.title}
          </span>
          <span>
            <strong>Opening:</strong> {film.opening_crawl}
          </span>
          <span>
            <strong>Release Date:</strong> {film.release_date}
          </span>
          <span>
            <strong>Director:</strong> {film.director}
          </span>
          <span>
            <strong>Producer:</strong> {film.producer}
          </span>
        </div>
      )}
    </div>
  );
}

export default FilmDropdown;
