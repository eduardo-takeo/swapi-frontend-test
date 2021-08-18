import { ICharacter } from "./Character";

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  charactersData: ICharacter[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  creates: string;
  edited: string;
  url: string;
}
