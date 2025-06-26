import { IMovieList } from "@/shared/api/movie";

export type MovieCardProps = {
  movie: IMovieList;
};

export type MovieListProps = {
  movies: IMovieList[] | null;
  countMovies: number;
  totalCountMovies: number;
  currentPage: number;
  className?: string;

  loading?: boolean;
};
