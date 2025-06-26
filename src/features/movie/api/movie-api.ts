import { instance } from "@/shared/api/api-instance";
import type { IMovieDetail, IMovieListResponse } from "@/shared/api/movie";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const movieApi = {
  baseKey: "movies",

  getMovieListInfinityQueryOptions: (query: string) => {
    return infiniteQueryOptions({
      queryKey: [movieApi.baseKey, "list"],
      queryFn: async ({ pageParam = 1, signal }) => {
        const response = await instance.get<IMovieListResponse>(
          `/3/movie/now_playing`,
          {
            params: {
              language: "en-US",
              page: pageParam,
              query,
            },
            signal,
          }
        );
        return response.data;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextPage =
          lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        return nextPage;
      },
    });
  },

  getMovieDetailQueryOptions: ({ movieId }: { movieId: number }) => {
    return queryOptions({
      queryKey: [movieApi.baseKey, "detail", movieId],
      queryFn: (meta) =>
        instance.get<IMovieDetail>(`/3/movie/${movieId}`, {
          signal: meta.signal,
        }),
    });
  },
};
