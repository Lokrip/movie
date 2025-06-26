"use client";

import { Button } from "@/shared/ui/kit/button";
import { useRouter } from "next/navigation";

export function Back() {
  const router = useRouter();

  return (
    <div className="w-full">
      <Button variant={"default"} onClick={() => router.back()}>
        ← Back
      </Button>
    </div>
  );
}
