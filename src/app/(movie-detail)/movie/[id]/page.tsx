import { MovieDetailWidget } from "@/widgets";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  return <MovieDetailWidget movieId={id} />;
}
