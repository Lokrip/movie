export interface MovieListPagination {
  param?: { [key: string]: string | string[] | undefined };
}

export interface MovieState {
  movieId: number;
  setMovieId: (id: number) => void;
}
