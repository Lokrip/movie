import { Container } from "@/shared/ui/kit/container";
import { ReactNode } from "react";

export function Layout({
  movieDetail,
  back,
}: {
  movieDetail: ReactNode;
  back: ReactNode;
}) {
  return (
    <div className="relative mt-8">
      <Container>
        {back}
        <div className="flex">{movieDetail}</div>
      </Container>
    </div>
  );
}
