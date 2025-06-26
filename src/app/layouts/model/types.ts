import { PropsWithChildren } from "react";

export type LayoutVariant = "detail" | "list" | "private" | "public";

export interface LayoutProps extends PropsWithChildren {
  variant?: LayoutVariant;
}
