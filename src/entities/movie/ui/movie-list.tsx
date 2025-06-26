import clsx from "clsx";
import { MovieListProps } from "../model/types";
import { MovieCard } from "./movie-card";
import { SkeletonCards } from "@/shared/ui/kit/skeleton-card";

export function MovieList({
  movies,
  countMovies,
  className,
  loading = false,
}: MovieListProps) {
  const classes = clsx(
    "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
    className
  );

  if (loading) {
    return (
      <div className={classes} aria-busy="true" aria-label="Загрузка фильмов">
        <SkeletonCards quantity={countMovies} />
      </div>
    );
  }

  return (
    <div className={classes}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
