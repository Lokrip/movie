"use client";

import { useMovieDetail } from "../model/use-movie-detail";
import { useMovieStore } from "../model/store";
import { selectMovieId } from "../model/selectors";
// Я eslint говорю что так можно потому Description, Information и тд
// У них логика относиться к widgets
import {
  Description,
  Information,
  MovieDetailSkeleton,
  Poster,
  TitleRating,
  // eslint-disable-next-line boundaries/element-types
} from "@/widgets";
import { useEffect } from "react";
import { toast } from "sonner";
import { ErrorComponent } from "@/shared/ui/kit/error-component";

export function MovieViewDetail() {
  const movieId = useMovieStore(selectMovieId);
  const { data, isLoading, isPending, error } = useMovieDetail(movieId);

  const loading = isLoading || isPending;

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

  if (loading) {
    return <MovieDetailSkeleton />;
  }

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <>
      <div className="w-full lg:w-1/3 flex-shrink-0 pt-10 pb-14">
        <Poster
          title={data?.title ?? ""}
          poster_path={data?.poster_path ?? ""}
        />
      </div>

      <div className="flex flex-col pt-10 pb-14 flex-1 space-y-6">
        <TitleRating
          title={data?.title ?? ""}
          vote_average={data?.vote_average ?? 0}
          genres={data?.genres ?? []}
        />
        <Description overview={data?.overview ?? ""} />
        <Information
          genres={data?.genres ?? []}
          release_date={data?.release_date ?? ""}
        />
      </div>
    </>
  );
}
