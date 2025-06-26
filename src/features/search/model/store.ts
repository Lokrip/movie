import { create } from "zustand";
import { SearchState } from "./types";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useSearchStore = create<SearchState>()(
  devtools(
    immer((set) => ({
      query: "",
      setQuery: (query) =>
        set((state) => {
          state.query = query;
        }),
    })),
    { name: "SearchStore" }
  )
);
