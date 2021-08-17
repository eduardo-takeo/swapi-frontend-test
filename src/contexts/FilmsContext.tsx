import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    fetchFilms();
  }, []);

  async function fetchFilms() {
    setIsLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setFilms(data.results);
    } catch (error) {
      setHasError(true);
      console.error(error);
    }

    setIsLoading(false);
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
