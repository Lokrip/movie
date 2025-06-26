import { Layout } from "../layouts/layout";

export default async function MovieDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout variant="detail">{children}</Layout>;
}
