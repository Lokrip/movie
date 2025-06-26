import { AppHeader, AppNavbar } from "@/widgets";
import { AppLayout } from "./ui/app-layout";
import { Toaster } from "sonner";
import { LayoutProps } from "./model/types";

export function Layout({ children, variant = "public" }: LayoutProps) {
  return (
    <AppLayout>
      <AppLayout.Navbar>
        <AppNavbar variant="public" />
      </AppLayout.Navbar>

      {variant !== "detail" && (
        <AppLayout.Header>
          <AppHeader />
        </AppLayout.Header>
      )}

      <AppLayout.Content>{children}</AppLayout.Content>

      <AppLayout.Footer>footer</AppLayout.Footer>

      <Toaster />
    </AppLayout>
  );
}
