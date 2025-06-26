import { Container } from "@/shared/ui/kit/container";

export function Layout({
  title,
  description,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <header className="overflow-hidden py-16 relative text-center bg-cyan-500">
      <Container>
        {title && <h1 className="text-5xl font-bold text-muted">{title}</h1>}
        {description && (
          <p className="mt-2 text-2xl text-muted">{description}</p>
        )}
      </Container>
    </header>
  );
}
