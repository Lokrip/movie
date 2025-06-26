import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const clases = clsx("container mx-auto px-2", className);
  return <div className={clases}>{children}</div>;
}
