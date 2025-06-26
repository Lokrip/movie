import { useRouter } from "next/navigation";
import { Button } from "./button";

export function ErrorComponent({ message }: { message: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center w-full">
      <h2 className="text-2xl font-semibold text-destructive mb-4">
        An unspecified error has occurred in the system.
      </h2>
      <p className="text-muted-foreground mb-6">{message}</p>
      <Button variant={"default"} onClick={() => router.refresh()}>
        Try Again
      </Button>
    </div>
  );
}
