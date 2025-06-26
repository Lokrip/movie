import { SearchState } from "./types";

export const selectSearchQuery = (state: SearchState) => state.query;
export const selectSetQuery = (state: SearchState) => state.setQuery;