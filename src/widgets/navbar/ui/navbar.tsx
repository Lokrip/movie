import { AppNavbarProps } from "../model/types";
import { Layout } from "../_ui/layouts";
import { Logo } from "../_ui/logo";
import { MainNav } from "../_ui/main-nav";
import { AppSearch } from "@/features";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AppNavbar({ variant }: AppNavbarProps) {
  return <Layout logo={<Logo />} nav={<MainNav />} actions={<AppSearch />} />;
}
