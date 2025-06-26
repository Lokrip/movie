import { AppImage } from "@/shared/ui/kit/app-image";

export function Poster({
  poster_path,
  title,
}: {
  poster_path: string;
  title: string;
}) {
  return (
    <AppImage
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={title}
      width={350}
      height={525}
      isContainerFullWidth={false}
      skeletonHeight="h-[525px]"
      skeletonWidth="w-[350px]"
      className="rounded-xl shadow-lg"
    />
  );
}
