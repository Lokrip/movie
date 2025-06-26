import { IGenre } from "@/shared/api/genre";

export function TitleRating({
  title,
  genres,
  vote_average,
}: {
  title: string;
  genres: IGenre[];
  vote_average: number;
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="text-gray-500 text-lg mt-2">
        {genres.map((g) => g.name).join(", ")}
      </div>
      <div className="mt-4 text-cyan-500 font-semibold">
        Рейтинг: {vote_average.toFixed(1)}
      </div>
    </div>
  );
}
