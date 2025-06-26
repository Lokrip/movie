export function Description({ overview }: { overview: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">О фильме</h2>
      <p className="text-gray-800">{overview}</p>
    </div>
  );
}
