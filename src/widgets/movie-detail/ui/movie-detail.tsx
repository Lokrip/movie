"use client";

import {
  MovieViewDetail,
  selectSetMovieId,
  useMovieStore,
} from "@/features/movie";
import { Layout } from "../_ui/layouts";
import { useEffect } from "react";
import { Back } from "../_ui/back";

export function MovieDetailWidget({ movieId }: { movieId: number }) {
  const setMovieId = useMovieStore(selectSetMovieId);

  useEffect(() => {
    setMovieId(movieId);
  }, [movieId, setMovieId]);

  return <Layout back={<Back />} movieDetail={<MovieViewDetail />} />;
}
