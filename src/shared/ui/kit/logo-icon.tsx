import clsx from "clsx";
import Image from "next/image";

export function LogoIcon({ className }: { className: string }) {
  const clases = clsx("w-[150px] h-[50px]", className);

  return (
    <Image
      src="/logo.svg"
      alt="logo"
      className={clases}
      width={100}
      height={50}
    />
  );
}
