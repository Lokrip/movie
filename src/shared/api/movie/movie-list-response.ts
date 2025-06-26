import { IMovieList } from "./movie";

export interface IMovieListResponseDates {
  maximum: string;
  minimum: string;
}

export interface IMovieListResponse {
  dates?: IMovieListResponseDates;
  page: number;
  results: IMovieList[];
  total_pages: number;
  total_results: number;
}
