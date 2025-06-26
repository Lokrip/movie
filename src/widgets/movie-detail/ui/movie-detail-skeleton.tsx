import { Skeleton } from "@/shared/ui/kit/skeleton";

export function MovieDetailSkeleton() {
  return (
    <>
      <div className="w-full lg:w-1/3 flex-shrink-0 pt-10 pb-14">
        <Skeleton className="w-[350px] h-[525px] rounded-xl" />
      </div>

      <div className="flex flex-col pt-10 pb-14 flex-1 space-y-6">
        <div>
          <Skeleton className="h-8 w-2/3 mb-2" />
          <Skeleton className="h-5 w-1/3 mb-4" />
          <Skeleton className="h-6 w-1/4" />
        </div>

        <div>
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-20 w-full" />
        </div>

        <div>
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-10 w-1/2" />
        </div>
      </div>
    </>
  );
}
