"use client";

import { MovieList } from "@/entities/movie";
import type { MovieListPagination } from "../model/types";
import { useMovieList } from "../model/use-movie-list";
import { useIntersection } from "@/shared/lib/use-intersection";
import { SkeletonCards } from "@/shared/ui/kit/skeleton-card";
import { isString } from "@/shared/types/type-guards";
import { selectSearchQuery, useSearchStore } from "@/features/search";
import { useEffect } from "react";
import { toast } from "sonner";
import { ErrorComponent } from "@/shared/ui/kit/error-component";

export function MovieListPagination({ param }: MovieListPagination) {
  const query = useSearchStore(selectSearchQuery);
  const searchParamQuery = isString(param?.query) ? param?.query : query;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useMovieList(searchParamQuery);
  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  const totalCountMovies = data?.pages?.[0]?.total_results ?? 0;
  const currentPage = data?.pages.length ?? 1;
  const countMoviesPage = 20;

  const cursorRef = useIntersection(() => {
    fetchNextPage();
  });

  useEffect(() => {
    if (error) {
      toast(error.message, {
        description: "Please edit the form later or clarify your request.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }, [error]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <div className="mb-5">
      <MovieList
        movies={movies}
        currentPage={currentPage}
        totalCountMovies={totalCountMovies}
        countMovies={countMoviesPage}
        loading={isLoading && currentPage === 1}
      />

      <div className="flex gap-2 mt-4" ref={cursorRef}>
        {!hasNextPage && <div>Нет данных для загрузки</div>}
        {isFetchingNextPage && <SkeletonCards quantity={5} />}
      </div>
    </div>
  );
}
