import { Container } from "@/shared/ui/kit/container";
import { ReactNode } from "react";

export function Layout({ movieList }: { movieList: ReactNode }) {
  return (
    <div className="relative mt-8">
      <Container>{movieList}</Container>
    </div>
  );
}
