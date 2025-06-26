import { Layout } from "../layouts/layout";

export default async function MovieListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout variant="list">{children}</Layout>;
}
