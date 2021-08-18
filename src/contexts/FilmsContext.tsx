import { ReactNode, useContext, useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { ICharacter } from "../interfaces/Character";
import { IFilm } from "../interfaces/Film";

interface FilmsContextProps {
  children: ReactNode;
}

interface FilmsContextData {
  films: IFilm[];
  isLoading: boolean;
  hasError: boolean;
}

const FilmsContext = createContext({} as FilmsContextData);

export const FilmsContextProvider = ({ children }: FilmsContextProps) => {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    fetchFilms();
  }, []);

  useEffect(() => {
    mergeCharactersToFilms();
  }, [characters]);

  async function fetchFilms() {
    setIsLoading(true);

    try {
      const filmsResponse = await axios.get("https://swapi.dev/api/films/");
      const filmsData = filmsResponse.data.results;

      fetchCharacters();
      setFilms(filmsData);
    } catch (error) {
      setHasError(true);
      console.error(error);
    }

    setIsLoading(false);
  }

  async function fetchCharacters() {
    try {
      const firstPageResponse = await axios.get(
        "https://swapi.dev/api/people/"
      );
      const firstPageData = firstPageResponse.data.results;
      const numberOfPages = Math.ceil(firstPageResponse.data.count / 10);
      setCharacters(firstPageData);

      for (let page = 2; page <= numberOfPages; page++) {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`
        );
        const data = response.data.results;
        setCharacters((prevCharacters) => [...prevCharacters, ...data]);
      }
    } catch (error) {
      setHasError(true);
      console.error(error);
    }
  }

  function mergeCharactersToFilms() {
    const updatedFilms = films.map((film) => {
      const matchingCharacters = characters.filter((character) =>
        film.characters.includes(character.url)
      );

      return matchingCharacters
        ? { ...film, charactersData: matchingCharacters }
        : { ...film };
    });

    setFilms(updatedFilms);
  }

  return (
    <FilmsContext.Provider
      value={{
        films,
        isLoading,
        hasError,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export const useFilms = () => {
  return useContext(FilmsContext);
};
