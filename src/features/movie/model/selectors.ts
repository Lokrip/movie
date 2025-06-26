import { MovieState } from "./types";

export const selectMovieId = (state: MovieState) => state.movieId;
export const selectSetMovieId = (state: MovieState) => state.setMovieId;
