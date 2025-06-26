import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../api/movie-api";

export function useMovieDetail(movieId: number) {
  return useQuery({
    ...movieApi.getMovieDetailQueryOptions({ movieId }),
    select: (result) => result.data,
  });
}
