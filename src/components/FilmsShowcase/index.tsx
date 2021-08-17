import React from "react";
import { IFilm } from "../../interfaces/Film";
import FilmDropdown from "../FilmDropdown";

interface FilmsShowcaseProps {
  filmsList: IFilm[];
}

function FilmsShowcase({ filmsList }: FilmsShowcaseProps) {
  return (
    <section>
      {filmsList?.map((film) => (
        <FilmDropdown film={film} />
      ))}
    </section>
  );
}

export default FilmsShowcase;
