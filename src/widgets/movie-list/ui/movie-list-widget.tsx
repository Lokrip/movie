import { MovieListPagination } from "@/features";
import { Layout } from "../_ui/layouts";

export function MovieListWidget({
  param,
}: {
  param?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Layout movieList={<MovieListPagination param={param} />} />
  );
}
