import React from "react";
import { IFilm } from "../../interfaces/Film";

interface FilmsShowcaseProps {
  filmsList: IFilm[];
}

function FilmsShowcase({ filmsList }: FilmsShowcaseProps) {
  return <div>List of films</div>;
}

export default FilmsShowcase;
