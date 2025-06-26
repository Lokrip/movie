import { IGenre } from "@/shared/api/genre";

export function Information({
  genres,
  release_date,
}: {
  release_date: string;
  genres: IGenre[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
      <div>
        <strong>Дата выхода:</strong> {release_date}
      </div>
      <div>
        <strong>Жанры:</strong> {genres.map((g) => g.name).join(", ")}
      </div>
    </div>
  );
}
