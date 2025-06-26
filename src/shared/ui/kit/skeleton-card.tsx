export function SkeletonCard() {
  return (
    <div className="w-full max-w-sm shadow-lg rounded-lg animate-pulse">
      <div className="bg-accent rounded-t-lg h-80 mb-4" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-accent rounded w-3/4" />
        <div className="h-4 bg-accent rounded w-1/4" />
        <div className="h-12 bg-accent rounded" />
      </div>
    </div>
  );
}

export function SkeletonCards({ quantity }: { quantity: number }) {
  return Array.from({ length: quantity }).map((_, i) => (
    <SkeletonCard key={i} />
  ));
}
