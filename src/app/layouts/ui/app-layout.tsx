import { attachSubComponents } from "@/shared/lib/react";
import { FC, PropsWithChildren } from "react";

const AppLayoutNavbar: FC<PropsWithChildren> = ({ children }) => {
  //Дальнейшая логика писаться будет тут

  return <>{children}</>;
};

const AppLayoutHeader: FC<PropsWithChildren> = ({ children }) => {
  //Дальнейшая логика писаться будет тут

  return <>{children}</>;
};

const AppLayoutContent: FC<PropsWithChildren> = ({ children }) => {
  //Дальнейшая логика писаться будет тут

  return <>{children}</>;
};

const AppLayoutFooter: FC<PropsWithChildren> = ({ children }) => {
  //Дальнейшая логика писаться будет тут

  return <>{children}</>;
};

export const AppLayoutParent: FC<PropsWithChildren> = ({ children }) => {
  //Дальнейшая логика писаться будет тут

  return <>{children}</>;
};

export const AppLayout = attachSubComponents("AppLayout", AppLayoutParent, {
  Navbar: AppLayoutNavbar,
  Header: AppLayoutHeader,
  Content: AppLayoutContent,
  Footer: AppLayoutFooter,
});
