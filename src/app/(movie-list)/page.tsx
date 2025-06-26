import { MovieListWidget } from "@/widgets";

export default async function MovieListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const param = await searchParams;
  return <MovieListWidget param={param} />;
}
