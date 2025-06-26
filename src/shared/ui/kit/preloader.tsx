import Image from "next/image";

export function PreLoader({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/preloaders.svg"
      alt="preloaders"
      height={height ?? 50}
      width={width ?? 50}
    />
  );
}
