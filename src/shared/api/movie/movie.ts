import { IGenre } from "../genre";

export type IMovieDetail = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  genres: IGenre[];
  overview: string;
  vote_average: number;
  backdrop_path: string | null;
};

export interface IMovieList {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}
