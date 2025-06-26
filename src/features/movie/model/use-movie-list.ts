import { useInfiniteQuery } from "@tanstack/react-query";
import { movieApi } from "../../movie/api/movie-api";

export function useMovieList(query: string) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
    isPending,
    isLoading,
    isError,
  } = useInfiniteQuery({
    ...movieApi.getMovieListInfinityQueryOptions(query),
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
    isPending,
    isLoading,
    isError,
  };
}
