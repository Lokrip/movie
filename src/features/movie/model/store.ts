import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { MovieState } from "./types";

export const useMovieStore = create<MovieState>()(
  devtools(
    immer((set) => ({
      movieId: 0,
      setMovieId: (id: number) =>
        set((state) => {
          state.movieId = id;
        }),
    })),
    { name: "MovieStore" }
  )
);
